import { fail, redirect } from "@sveltejs/kit"
import type { Actions, PageServerLoad, PageServerLoadEvent } from "./$types"

export const load: PageServerLoad = async (event) => {
	const values_str = event.url.searchParams.get("values") as string | null
	const values = values_str ? values_str.split(",").map((v) => Number(v)) : null

	return { values }
}

function collatz(value: number): number {
	if (value % 2 === 0) {
		return value / 2
	}

	return value * 3 + 1
}

export const actions: Actions = {
	default: (event) => {
		const values_str = event.url.searchParams.get("values") as string | null
		if (!values_str) return fail(400, { error: "Values cannot be empty" })
		const last_value = values_str
			.split(",")
			.map((v) => Number(v))
			.at(-1)
		if (!last_value) return fail(400, { error: "Values cannot be empty" })

		const next_value = collatz(last_value)

		const new_values_str = `${values_str},${next_value}`

		redirect(302, `/example5?values=${new_values_str}`)
	},
}
