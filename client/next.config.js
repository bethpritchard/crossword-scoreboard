/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.optimization.emitOnErrors = false;
		}

		return config;
	},
};

module.exports = nextConfig;
