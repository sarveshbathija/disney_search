export interface DisneyFavorites {
    character: string;
    movie: string;
    ride: string;
    park: string;
}

export interface UserProfile {
    firstName: string;
    lastName: string;
    birthDate: string;
    city: string;
    state: string;
    favorites: DisneyFavorites;
    lastUpdate?: string;
}
