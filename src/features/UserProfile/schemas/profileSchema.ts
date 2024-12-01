import { dateRegex } from "@/utils/utils";
import { z } from "zod";

export const profileSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    birthDate: z
        .string()
        .regex(dateRegex, "Date must be in MM/DD/YYYY format")
        .refine(
            (date) => {
                const [month, day, year] = date.split("/").map(Number);
                const isValidDate =
                    new Date(year, month - 1, day).getDate() === day;
                return isValidDate;
            },
            { message: "Invalid date" }
        ),
    city: z.string(),
    state: z.string(),
    favorites: z.object({
        ride: z.string(),
        park: z.string(),
        character: z.string(),
        movie: z.string(),
    }),
    lastUpdate: z.string().optional(),
});

export type ProfileFormFields = z.infer<typeof profileSchema>;
