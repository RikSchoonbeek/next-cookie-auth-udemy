import Link from "next/link";

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
