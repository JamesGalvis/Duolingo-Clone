export function Error() {
  return (
    <div className="flex max-lg:flex-col items-center justify-center lg:-space-x-12 xs:pt-6 pt-0 md:px-8 px-4 h-full">
      <div className="flex-1">
        <h1 className="xs:text-[50px] text-[42px] font-bold text-left text-[#4b4b4b] w-full max-md:max-w-[580px] max-lg:text-center">
          ¡We are having problems at the moment!
        </h1>
        <h2 className="xs:text-[42px] text-[35px] font-bold text-[#58cc02] max-lg:text-center">
          We will solve it as soon as possible
        </h2>
      </div>
      <img
        src="/icons/prueba.svg"
        alt="Zari"
        width={500}
        height={500}
        className="flex-1 object-cover transform min-w-[120px] min-h-[120px] max-md:pb-[80px]"
      />
    </div>
  )
}
