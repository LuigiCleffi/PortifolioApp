import { ChangeEvent, useEffect, useState } from "react";
import { UserPlus } from "phosphor-react";
import { FormContainer, NewProjectContainer, ProfilePic } from "./styles";
import { Cards } from "../../assets/components/Cards";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../state/local/hooks";
import { addAction } from "../../state/local/portifolio/slice";
import { selectPortifolioData } from "../../state/local/portifolio/selector";
import { useDispatch } from "react-redux";

const pageMessages = {
  name: "Name field must be filled",
  nameMin: "Must have at least 3 characters",
  nameMax: "Maximum characters is 50",
  validUrl: "Must be a valid URL",
  descriptionMin: "Must have at least 8 characters",
  descriptionMax: "Maximum characters is 50",
  description:
    "Add some good content about your work, please keep between 60 to 80 words",
} as const;

const PortifolioSchema = z.object({
  name: z
    .string()
    .min(3, { message: pageMessages.nameMin })
    .max(50, { message: pageMessages.nameMax })
    .nonempty({ message: pageMessages.name }),
  url: z.string().url({ message: pageMessages.validUrl }),
  repository: z.string().url({ message: pageMessages.validUrl }),
  description: z
    .string()
    .min(8, { message: pageMessages.descriptionMin })
    .max(80, { message: pageMessages.descriptionMax })
    .nonempty({ message: pageMessages.description }),
});

type ProjectFormData = z.infer<typeof PortifolioSchema>;

export function Portifolio() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(PortifolioSchema),
  });

  const [project, setProject] = useState<ProjectFormData>(
    {} as ProjectFormData
  );
  const dispatch = useDispatch();

  const [currentName, setCurrentName] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");

  const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentName(event.target.value);
  };

  const itemData = useAppSelector(selectPortifolioData);

  const defaultValue = {
    name: currentName || "Project Title",
    description:
      currentDescription ||
      "Add some good content about your work, please keep between 60 to 80 words",
  };

  const handleDescriptionTextAreaChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCurrentDescription(event.target.value);
  };

  const onSubmit: SubmitHandler<ProjectFormData> = (data) => {
    try {
      PortifolioSchema.parse(data);

      dispatch(addAction(data));

      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <NewProjectContainer>
      <ProfilePic className="profile-pic">
        <img
          src="https://avatars.githubusercontent.com/u/65309377?v=4"
          alt="Your Profile Picture"
        />
        <UserPlus className="add-button" />
      </ProfilePic>

      <FormContainer>
        <h1>Project information</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="projectName">Name:</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <input
                  id="projectName"
                  placeholder="Select a good name"
                  {...field}
                  value={currentName}
                  onChange={(e) => {
                    field.onChange(e);
                    handleNameInputChange(e);
                  }}
                />
                {!!errors.name ? (
                  <article className="text-danger">
                    {errors.name.message}
                  </article>
                ) : (
                  <article>Type a good name for your project</article>
                )}
              </>
            )}
          />
          <label htmlFor="projectUrl">URL:</label>
          <input
            id="projectName"
            placeholder="Type your project url"
            {...register("url")}
          />
          {!!errors.url ? (
            <article className="text-danger">{errors.url.message}</article>
          ) : (
            <article> tips: Build it and deploy with Netlify</article>
          )}

          <label htmlFor="projectUrl">Code Repository:</label>
          <input
            id="projectName"
            placeholder="Type your project repository url"
            {...register("repository")}
          />
          {!!errors.repository ? (
            <article className="text-danger">
              {errors.repository.message}
            </article>
          ) : (
            <article>tips: Use Github or Gitlab</article>
          )}

          <label htmlFor="projectDescription">Description:</label>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <textarea
                  id="projectDescription"
                  placeholder="Add some awesome description of your amazing work !"
                  cols={60}
                  rows={3}
                  {...field}
                  value={currentDescription}
                  onChange={(e) => {
                    field.onChange(e);
                    handleDescriptionTextAreaChange(e);
                  }}></textarea>
                {!!errors.description ? (
                  <article className="text-danger">
                    {errors.description.message}
                  </article>
                ) : null}
              </>
            )}
          />

          <button type="submit">Add Project</button>
        </form>
      </FormContainer>
      <Cards
        title={defaultValue.name}
        description={defaultValue.description}
        url={project.url}
        repositoryURL={project.repository}
      />
    </NewProjectContainer>
  );
}
