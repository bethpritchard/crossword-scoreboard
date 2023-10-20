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
