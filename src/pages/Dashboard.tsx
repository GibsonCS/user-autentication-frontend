export const Dashboard = () => {
  const username = localStorage.getItem("username");
  return (
    <>
      <section>
        <span className="text-xl">Bem vindo(a), {username} </span>
      </section>
    </>
  );
};
