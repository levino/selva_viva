<Fragment>
  <section class="bg-white">
    <div>
      <div class="flex flex-no-wrap items-center mx-auto py-10 w-4/5">
        <div class="bg-gray-500 flex-grow h-px max-w-full"></div>
        <div class="px-10 w-auto">
          <h2 class="font-all font-semibold text-4xl text-center text-yellow_leave-600 uppercase">
            {our_trees.title}
          </h2>
        </div>
        <div class="bg-gray-500 flex-grow h-px max-w-full"></div>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="flex flex-col items-start justify-center px-2 w-full md:w-5/12 lg:px-10">
          <div class="mx-auto">
            <p class="font-bold mb-4 mt-4 text-brown-800 text-xl uppercase">
              {our_trees.subtitle}
            </p>
          </div>
          <ul class="flex flex-wrap">
            <li class="border-b-2 drop-shadow-lg font-light leading-relaxed ml-2 px-2 text-brown-800 text-xl">
              {our_trees.trees_list.map((tree) => (
                <Fragment>
                  <li class="border-b-2 drop-shadow-lg font-light leading-relaxed ml-2 px-2 text-brown-800 text-xl">
                    Cedros
                  </li>
                </Fragment>
              ))}
            </li>
            <a
              href="#"
              class="bg-yellow_leave-500 font-light hover:bg-green-400 inline-block mt-7 mx-auto px-5 py-2 rounded-sm shadow-lg text-white uppercase"
            >
              werde Baumpate/in
            </a>
          </ul>
          <div class="flex p-4 w-full md:w-7/12">
            <img
              src="img/fotos%20bestof%20vivero%20y%20finca/DSC01083%20copy_smaller.jpeg"
              class="clip_photo_left_upper h-full object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</Fragment>;
