#! /bin/bash
set -Eeuo pipefail

deploy () {
	value="$(npx --yes @fraym/deployments@0.35.1 create $1)"

	[[ ${value} =~ created[[:space:]]deployment[[:space:]]*([0-9]+) ]] &&
		deploymentId=${BASH_REMATCH[1]}

	echo "Deployment ID: $deploymentId"

	npx --yes @fraym/deployments@0.35.1 wait ${deploymentId}

	npx --yes @fraym/deployments@0.35.1 activate ${deploymentId}

	npx --yes @fraym/deployments@0.35.1 confirm ${deploymentId}
}

cd schema

echo "Deploying blue"
deploy blue

echo "\n\nDeploying green"
deploy green

