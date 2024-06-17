const Hero = () => {
  return (
    <div className="bg-cover bg-no-repeat h-75 large:h-100 relative hero">
      <section className="relative top-8 w-50 bg-white p-8 my-0 mx-auto text-left box-content large:absolute large:top-12 large:right-12 large:w-75 large:m-8">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="font-bold large:text-2xl">No fees.</p>
        <p className="font-bold large:text-2xl">No minimum deposit.</p>
        <p className="font-bold large:text-2xl">High interest rates.</p>
        <p className="text-sm large:text-xl mt-2.5">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

export default Hero;
