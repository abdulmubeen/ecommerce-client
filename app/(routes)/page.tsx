import getBillboard from "@/actions/get-billboard";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("72f50fb8-a06d-464e-971e-7ccd52be551c");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
