import { SectionList } from "@/components/Sections/SectionList";
import { Filter, FilterForm } from "@/components/UI";
import { trpc } from "@/utils/trpc";
import { NextPage } from "next";
import { useState } from "react";

const SectionsPage: NextPage = () => {
  const [enableQuery, setEnableQuery] = useState(false);

  function filter(data: FilterForm) {}

  return (
    <div>
      <Filter onSubmit={filter} />
      <SectionList />
    </div>
  );
};

export default SectionsPage;
