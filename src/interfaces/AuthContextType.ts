

export interface AuthContextType {
    user: string | null,
    login: (username: string) => void
}