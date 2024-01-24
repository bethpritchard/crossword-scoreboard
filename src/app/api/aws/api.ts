import { Score } from "@/app/types";
import axios from "axios";

const config = {
	headers: {
		"Content-Type": "application/json",
		"X-Api-Key": "UMPTer3i0kayBI9SbtOxo4j2cuK47Z152Jlup8S5",
	},
};

const URL = "https://pmzry43wxh.execute-api.eu-west-2.amazonaws.com/v1";

export const uploadFile = async (body: Score) => {
	axios
		.post(`${URL}/upload`, JSON.stringify(body), config)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
};

export const downloadFile = async () => {
	try {
		const response = await axios.get(`${URL}/download`, config);
		return response.data as Score;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
