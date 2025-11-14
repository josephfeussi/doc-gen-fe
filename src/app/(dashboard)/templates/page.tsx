"use client"

import { TemplateCard } from '@/components/custome/templateCard';

const Page = () => {
  const handleUseTemplate = (templateId: string) => {
    // Handle template usage
    alert(`Using template: ${templateId}`)
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TemplateCard
          title="FMI"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          onUse={() => handleUseTemplate("FMI")}
        />
        <TemplateCard
          title="BAD"
          description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          onUse={() => handleUseTemplate("BAD")}
        />
        <TemplateCard
          title="BID"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          onUse={() => handleUseTemplate("BID")}
        />

        <TemplateCard
          title="BEAC"
          description="here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
          onUse={() => handleUseTemplate("BEAC")}
        />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
}

export default Page;