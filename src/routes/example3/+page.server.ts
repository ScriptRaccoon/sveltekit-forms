import { fail } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

type Note = {
	id: string
	contents: string[] // can be multiple lines
	created_at: Date
}

let notes: Note[] = [] // can be in a DB

export const load: PageServerLoad = () => {
	return { notes }
}

export const actions = {
	add: async (event) => {
		const formData = await event.request.formData()
		const content = formData.get("content") as string | null

		if (!content) {
			return fail(400, { error: "Note cannot be empty" })
		}

		const contents = content.split("\n").map((c) => c.trim())

		const id = crypto.randomUUID()
		const created_at = new Date()

		notes.push({ id, contents, created_at })

		return { message: "Note has been added" }
	},

	delete: async (event) => {
		const formData = await event.request.formData()
		const id = formData.get("id") as string | null
		if (!id) return

		notes = notes.filter((note) => note.id !== id)

		return { message: "Note has been deleted" }
	},
}
