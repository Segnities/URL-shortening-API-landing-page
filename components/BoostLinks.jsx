import BoostBg from './UI/BoostBg';
import Button from './UI/Button';

export default function BoostLinks() {
  return (
    <BoostBg className="w-full h-52 mt-10 py-10">
      <section className="flex flex-col gap-8 items-center">
        <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
          Boost your links today
        </h3>
        <Button variant="info" className="rounded-full p-3 md:p-4 w-44 text-base lg:text-lg">
          Get started
        </Button>
      </section>
    </BoostBg>
  );
}
