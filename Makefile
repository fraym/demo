help: ## Show this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"; printf "\Targets:\n"} /^[$$()% a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m	 %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

start: ## Start Freym
	./docker-login.sh
	docker compose up -d

register: ## Register Freym migrations
	cd schema && npx @fraym/migrations@0.7.0 register

apply: ## Apply Freym migrations
	cd schema && npx @fraym/migrations@0.7.0 wait-finish

rollback: ## Rollback Freym migrations
	cd schema && npx @fraym/migrations@0.7.0 rollback

status: ## Get Freym migrations status
	cd schema && npx @fraym/migrations@0.7.0 status

cleanup: ## Get Freym migrations status
	cd schema && npx @fraym/migrations@0.7.0 cleanup

migrate: register apply cleanup
