provider "aws" {
    region = "eu-west-2"
 default_tags {
   tags = {
     Environment = "dev"
     Owner       = "B Pritchard"
     Project     = "crossword-scoreboard"
   }
 }
}

resource "aws_s3_bucket" "crossword_scoreboard" {
  bucket = "crossword-scoreboard"
  tags   = {
    Name = "crossword-scoreboard"
  }
}

resource "aws_s3_bucket_public_access_block" "acl_block" {
  bucket = aws_s3_bucket.crossword_scoreboard.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.crossword_scoreboard.id
  policy = jsonencode({
  Version = "2012-10-17"
    "Statement": [
      {
          "Sid": "PublicReadGetObject",
          "Effect": "Allow",
          "Principal": "*",
          "Action": [
              "s3:GetObject"
          ],
          "Resource": [
              "${aws_s3_bucket.crossword_scoreboard.arn}/*"
          ]
      }
  ]
})
  depends_on = [aws_s3_bucket_public_access_block.acl_block]
}

resource "aws_s3_bucket_cors_configuration" "cors_rule" {
  bucket = aws_s3_bucket.crossword_scoreboard.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["PUT", "POST", "GET"]
    allowed_origins = ["http://localhost:3000", "https://bethpritchard.github.io/crossword-scoreboard/"]
    max_age_seconds = 3000
  }
}
