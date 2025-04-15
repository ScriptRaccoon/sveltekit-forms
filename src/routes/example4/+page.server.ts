import type { PageServerLoad } from "./$types"
import all_countries from "./countries.json"

export const load: PageServerLoad = (event) => {
	const query = event.url.searchParams.get("query") as string | null

	if (!query) return { query, countries: all_countries }

	const countries = all_countries.filter((name) =>
		name.toLowerCase().includes(query.toLowerCase()),
	)

	return { query, countries }
}
