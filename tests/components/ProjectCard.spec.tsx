import ProjectCard, {ProjectCardSkeleton} from "../../src/components/ProjectCard";
import {render, screen} from "@testing-library/react";
import {NextIntlProvider} from "next-intl";

describe("ProjectCard Component", () => {

    beforeAll(() => {
        const useRouter = jest.spyOn(require("next/router"), "useRouter");
        useRouter.mockImplementationOnce(() => ({
            query: { locale: "fr" }
        }));
    });

    it("should render", () => {
        render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <ProjectCard project={{
                    name: "Name",
                    description: "Description",
                    language: "Language",
                    url: "URL"
                }} />
            </NextIntlProvider>
        );

        expect(screen.getByText("Name")).toBeInTheDocument();
        expect(screen.getByText("Description")).toBeInTheDocument();
        expect(screen.getByText("Language")).toBeInTheDocument();
    });

    it("should render skeleton", () => {
        expect(render(<ProjectCardSkeleton />)).toBeTruthy();
    });
});
