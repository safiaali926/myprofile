import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function About() {
    return (
        <main className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/bg.jpg')` }}>
      <div className="min-h-screen h-full w-full bg-black bg-opacity-60 p-4 sm:p-8 lg:p-12">


<Tabs defaultValue="education" className="">
  <TabsList className="bg-cyan-300 mb-9">
    <TabsTrigger value="education">Education Qualification</TabsTrigger>
    <TabsTrigger value="course">Short Course</TabsTrigger>
    <TabsTrigger value="experience">Experience</TabsTrigger>
    <TabsTrigger value="skills">Skills</TabsTrigger>

  </TabsList>
  <TabsContent value="education">
  <h1 className="text-cyan-300 text-xl">Graduation in Arts - 2023</h1>
  <p className="text-md text-white mb-4">Allama Iqbal Open University</p>
  
  <h1 className="text-cyan-300 text-xl">Intermediate in Pre-Engineering - 2020</h1>
    <p className="text-md text-white mb-4">Govt. Girls Degree College - Block M</p>

    <h1 className="text-cyan-300 text-xl">Matriculation in Science - 2018</h1>
  <p className="text-md text-white mb-4">Govt. Girls Comprehensive High Secondary School</p>

  </TabsContent>
  <TabsContent value="course">
  <h1 className="text-cyan-300 text-xl">Artificial Intelligence, Web 3.0 & Metaverse - ongoing</h1>
  <p className="text-md text-white">Governor House Karachi</p>
  <p className="text-md text-white mb-4 italic">-Governor Sindh Kamran Khan Tessori's Free Course</p>

  <h1 className="text-cyan-300 text-xl">Digital Marketing & SEO - 2022</h1>
  <p className="text-md text-white">Vocational Training Institue for Women</p>
  <p className="text-md text-white mb-4 italic">-Kamyab Jawan Programme</p>


  <h1 className="text-cyan-300 text-xl">Certificate of Information Technology (CIT) - 2021</h1>
  <p className="text-md text-white">Vocational Training Institue for Women</p>

  </TabsContent>
  <TabsContent value="experience">
  <h1 className="text-cyan-300 text-xl">Care Intelligence Private Ltd.</h1>
  <p className="text-md text-cyan-300">Oct 2023 - Present</p>
  <p className="text-md text-white mb-5">Social Media Manager & Graphic Designer</p>
  
  <h1 className="text-cyan-300 text-xl">Al-Rayaz Hospital Trust</h1>
  <p className="text-md text-cyan-300">March 2023 - Sept 2024</p>
  <p className="text-md text-white mb-5">Social Media Manager</p>

  
  <h1 className="text-cyan-300 text-xl">MMK Media & Graphics Pvt Ltd.</h1>
  <p className="text-md text-cyan-300">Dec 2022 - Aug 2023</p>
  <p className="text-md text-white mb-5">Digital Marketer & Graphic Designer</p>


  </TabsContent>

  <TabsContent value="skills">
<Image src="/images/html.png" alt="html" width={100} height={100} className="mb-5"></Image>
  <Progress value={80} className="bg-white border-2 text-white w-1/2 rounded "/>
<p className="text-white">HTML - 80%</p>

<Image src="/images/css.svg" alt="html" width={100} height={100} className="mb-4 p-3"></Image>
  <Progress value={70} className="bg-white border-2 text-white w-1/2 rounded "/>
<p className="text-white">CSS - 70%</p>


<Image src="/images/ts.png" alt="html" width={70} height={70} className="mb-5  mt-4 ml-3"></Image>
  <Progress value={60} className="bg-white border-2 text-white w-1/2 rounded "/>
<p className="text-white">Typescript - 60%</p>


<Image src="/images/tailwind.png" alt="html" width={80} height={80} className="my-5"></Image>
  <Progress value={80} className="bg-white border-2 text-white w-1/2 rounded "/>
<p className="text-white">Tailwind CSS - 80%</p>


<Image src="/images/ps.png" alt="html" width={90} height={90} className="my-5"></Image>
  <Progress value={90} className="bg-white border-2 text-white w-1/2 rounded "/>
<p className="text-white">Adobe Photoshop - 90%</p>


<Image src="/images/ai.png" alt="html" width={90} height={90} className="my-5"></Image>
  <Progress value={70} className="bg-white border-2 text-white w-1/2 rounded "/>
<p className="text-white">Adobe Illustrator - 70%</p>

<Image src="/images/figma.svg" alt="html" width={60} height={60} className="my-5"></Image>
  <Progress value={60} className="bg-white border-2 text-white w-1/2 rounded "/>
<p className="text-white">Figma - 60%</p>

  </TabsContent>

</Tabs>

        </div>
        </main>
    )
}