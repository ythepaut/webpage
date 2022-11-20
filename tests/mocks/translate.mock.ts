export const useRouter = jest.spyOn(require("next/router"), "useRouter");
useRouter.mockImplementationOnce(() => ({
    query: { locale: "fr" }
}));
