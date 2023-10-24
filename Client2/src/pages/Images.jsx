export default function Images() {
    return (
        <>
            <div className="parent" width="100%" height="50">
                <div class="col-span-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="Image1"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUau1wvCr1pi2dIfVWInJOD5N39lPPcs3daRpWQU3ihGt9DqYSsw5tIVTcYwPMHLbizW0&usqp=CAU"
                            alt="Neymar" width="128" height="128" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">This is Image one</h5>
                        </a>


                    </div>
                </div>


                <div class="col-span-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="Image2"
                            src="https://cdn.vox-cdn.com/thumbor/0LeSpWQ5343aGdf5h7bM1gPkO7I=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16327590/1152488213.jpg.jpg"
                            alt="Hazard" width="128" height="128" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">This is Image Two</h5>
                        </a>


                    </div>
                </div>


                <div class="col-span-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="Image3"
                            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt55a2164ef2e7b908/63bc3d9e08ea795d3f5d03e4/bale.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                            alt="Bale" width="128" height="128" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">This is Image Three</h5>
                        </a>


                    </div>
                </div>
            </div>
        </>
    )
}