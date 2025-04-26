import type { PageServerLoad } from "./$types"
import allCountries from "./countries.json"

export const load: PageServerLoad = (event) => {
	const query = event.url.searchParams.get("query") as string | null

	if (!query) return { query, countries: allCountries }

	const countries = allCountries.filter((name) =>
		name.toLowerCase().includes(query.toLowerCase()),
	)

	return { query, countries }
}
