import { useContext } from "react";
import { Controller } from "react-hook-form";

import { usStates } from "@/constants/states";
import { parks } from "@/constants/parks";
import { UserContext } from "../providers/UserProvider";

const EditProfile = () => {
    const { formValues, setEditMode, profile, onSubmit } =
        useContext(UserContext);
    const { register, formState, control, handleSubmit } = formValues;
    const { errors, isSubmitting } = formState;

    return (
        <div className="p-20 bg-light-blue">
            <form
                onSubmit={handleSubmit(onSubmit)}
                aria-labelledby="edit-profile-heading"
            >
                <h1 id="edit-profile-heading" className="sr-only">
                    Edit Profile
                </h1>

                <div className="flex w-[75%] gap-2">
                    <div className="flex-1">
                        <label
                            htmlFor="firstName"
                            className="text-base text-secondary font-bold"
                        >
                            First Name
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            id="firstName"
                            className={`p-2 w-full border rounded-md ${
                                errors.firstName
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            {...register("firstName")}
                            type="text"
                            aria-invalid={!!errors.firstName}
                            aria-describedby="firstName-error"
                            placeholder="First Name"
                        />
                        {errors.firstName && (
                            <span id="firstName-error" className="text-red-500">
                                {errors.firstName.message}
                            </span>
                        )}
                    </div>

                    <div className="flex-1">
                        <label
                            htmlFor="lastName"
                            className="text-base text-secondary font-bold"
                        >
                            Last Name
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            id="lastName"
                            className={`p-2 w-full border rounded-md ${
                                errors.lastName
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            {...register("lastName")}
                            type="text"
                            aria-invalid={!!errors.lastName}
                            aria-describedby="lastName-error"
                            placeholder="Last Name"
                        />
                        {errors.lastName && (
                            <span id="lastName-error" className="text-red-500">
                                {errors.lastName.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex w-[75%] gap-2 mt-4">
                    <div className="flex-1">
                        <label
                            htmlFor="birthDate"
                            className="text-base text-secondary font-bold"
                        >
                            Birth Date
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            id="birthDate"
                            className={`p-2 w-full border rounded-md ${
                                errors.birthDate
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            {...register("birthDate")}
                            type="text"
                            aria-invalid={!!errors.birthDate}
                            aria-describedby="birthDate-error"
                            placeholder="MM/DD/YYYY"
                        />
                        {errors.birthDate && (
                            <span id="birthDate-error" className="text-red-500">
                                {errors.birthDate.message}
                            </span>
                        )}
                    </div>
                    <div className="flex-1"></div>
                </div>

                <div className="flex w-[75%] gap-2 mt-4">
                    <div className="flex-1">
                        <label
                            htmlFor="city"
                            className="text-base text-secondary font-bold"
                        >
                            City
                        </label>
                        <input
                            id="city"
                            className="p-2 w-full rounded-md"
                            {...register("city")}
                            type="text"
                            aria-describedby="city-error"
                            placeholder="City"
                        />
                        {errors.city && (
                            <span id="city-error" className="text-red-500">
                                {errors.city.message}
                            </span>
                        )}
                    </div>

                    <div className="flex-1 flex">
                        <div>
                            <label
                                htmlFor="state"
                                className="text-base text-secondary font-bold"
                            >
                                State
                            </label>
                            <Controller
                                name="state"
                                control={control}
                                render={({ field }) => (
                                    <select
                                        id="state"
                                        {...field}
                                        className="p-2 w-full rounded-md"
                                        aria-describedby="state-error"
                                        value={field.value || ""}
                                    >
                                        <option value="">Select</option>
                                        {usStates.map((state) => (
                                            <option key={state} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            />
                        </div>
                        <div className="flex-1"></div>
                    </div>
                </div>

                <div className="flex w-[75%] gap-2 mt-4">
                    <div className="flex-1">
                        <label
                            htmlFor="favorites.character"
                            className="text-base text-secondary font-bold"
                        >
                            Favorite Disney Character
                        </label>
                        <input
                            id="favorites.character"
                            className="p-2 w-full rounded-md"
                            {...register("favorites.character")}
                            type="text"
                            placeholder="Favorite Disney Character"
                        />
                    </div>
                </div>

                <div className="flex w-[75%] gap-2 mt-4">
                    <div className="flex-1">
                        <label
                            htmlFor="favorites.movie"
                            className="text-base text-secondary font-bold"
                        >
                            Favorite Disney Movie
                        </label>
                        <input
                            id="favorites.movie"
                            className="p-2 w-full rounded-md"
                            {...register("favorites.movie")}
                            type="text"
                            placeholder="Favorite Disney Movie"
                        />
                    </div>
                </div>

                <div className="flex w-[75%] gap-2 mt-4">
                    <div className="flex-1">
                        <label
                            htmlFor="favorites.ride"
                            className="text-base text-secondary font-bold"
                        >
                            Favorite Disney Ride
                        </label>
                        <input
                            id="favorites.ride"
                            className="p-2 w-full rounded-md"
                            {...register("favorites.ride")}
                            type="text"
                            placeholder="Favorite Disney Ride"
                        />
                    </div>
                </div>

                <div className="flex w-[75%] gap-2 mt-4">
                    <div className="flex-1">
                        <label
                            htmlFor="favorites.park"
                            className="text-base text-secondary font-bold"
                        >
                            Favorite Disney Park
                        </label>
                        <Controller
                            name="favorites.park"
                            control={control}
                            render={({ field }) => (
                                <select
                                    id="favorites.park"
                                    {...field}
                                    className="p-2 w-full rounded-md"
                                    aria-describedby="favorites-park-error"
                                    value={field.value || ""}
                                >
                                    <option value="">Select a park</option>
                                    {parks.map((state) => (
                                        <option key={state} value={state}>
                                            {state}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <button
                        className="rounded-md bg-disney-blue text-white px-6 py-3"
                        disabled={isSubmitting}
                        type="submit"
                        aria-busy={isSubmitting}
                    >
                        {isSubmitting ? "Updating..." : " Update Profile"}
                    </button>
                    {profile && (
                        <button
                            type="button"
                            className="rounded-md text-disney-blue px-6 py-3 ml-4 border-disney-blue border"
                            onClick={() => setEditMode(false)}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};
export default EditProfile;
