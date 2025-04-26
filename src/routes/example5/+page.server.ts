import { fail, redirect } from "@sveltejs/kit"
import type { Actions, PageServerLoad } from "./$types"

function collatz(value: number): number {
	if (value % 2 === 0) {
		return value / 2
	}

	return value * 3 + 1
}

export const load: PageServerLoad = async (event) => {
	const valuesString = event.url.searchParams.get("values")
	const values = valuesString ? valuesString.split(",").map(Number) : null

	return { values }
}

export const actions: Actions = {
	default: (event) => {
		const valuesString = event.url.searchParams.get("values") as string | null
		if (!valuesString) return fail(400, { error: "Values cannot be empty" })
		const lastValue = valuesString.split(",").map(Number).at(-1)
		if (!lastValue) return fail(400, { error: "Values cannot be empty" })

		const nextValue = collatz(lastValue)
		const newValuesString = `${valuesString},${nextValue}`

		redirect(302, `/example5?values=${newValuesString}`)
	},
}
