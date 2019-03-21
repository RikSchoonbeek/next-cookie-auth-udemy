import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <Link href="/profile">
        <a>Go to profile</a>
      </Link>
    </Layout>
  );
};

export default Index;
