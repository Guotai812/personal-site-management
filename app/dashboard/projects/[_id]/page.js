import FormDetail from "@/components/FormDetail";
import { getProject } from "@/lib/projects";

export default async function EditProject({ params }) {
  const { _id } = await params;
  const project = await getProject(_id);
  const serializableProject = {...project, _id: _id}
  return (
    <FormDetail project={serializableProject}/>
  )
}