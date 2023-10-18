import { Score } from "@/app/types";
import {
	GetObjectCommand,
	PutObjectCommand,
	S3Client,
} from "@aws-sdk/client-s3";

const S3_BUCKET = "crossword-scoreboard";

const client = new S3Client({
	region: "eu-west-2",
	credentials: {
		accessKeyId: "nope",
		secretAccessKey: "no",
	},
});

export const uploadFile = async (key: string, body: Score) => {
	const params = {
		Bucket: S3_BUCKET,
		Key: `${key}.json`,
		Body: JSON.stringify(body),
		ContentType: "application/json; charset=utf-8",
	};
	client
		.send(new PutObjectCommand(params))
		.then(() => {
			console.log("Form uploaded successfully.");
		})
		.catch((error) => {
			console.log(error);
		});
};

export const downloadFile = async (key: string) => {
	const command = new GetObjectCommand({
		Bucket: S3_BUCKET,
		Key: `${key}.json`,
	});

	try {
		const response = await client.send(command);
		const jsonString = await response.Body?.transformToString();

		return JSON.parse(jsonString ?? "");
	} catch (error) {
		console.error("Error downloading file:", error);
		return null;
	}
};
