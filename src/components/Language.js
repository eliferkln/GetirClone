import {useState} from 'react'
import ReactFlagsSelect from 'react-flags-select';
import {AiOutlineClose} from 'react-icons/ai'



function Language( {setShowModal1}) {



	return (
		<div
			className="absolute top-10 left-10 z-50 ">        
		        	<div className="w-full sm:w-[400px] bg-gray-50 sm:rounded-lg px-5 py-3 pb-5 sm:py-6">
					<div className="  justify-items-end ">	
					<AiOutlineClose className='flex ' onClick={()=> setShowModal1(false)}/>
						</div>	
						<h3 className="text-center mb-4 font-semibold text-purple-600">Dil Değiştir</h3>	
					
						<div className="flex flex-col gap-y-3">
							<div className="relative flex-1 group  rounded-md ">
                            <input type="radio" value="Türkçe" />
                            <span className="absolute top-0 left-5 h-full  rounded flex items-center px-4  outline-none  text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-purple-600 peer-valid:h-7 peer-valid:text-xs peer-valid:text-purple-600">
									Türkçe
								</span>
                                	</div>
                                <div className="relative flex-1 group  rounded-md ">
                                <input type="radio" value="Türkçe" />
                            <span className="absolute top-0 left-5 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-purple-600 peer-valid:h-7 peer-valid:text-xs peer-valid:text-purple-600">
									English
								</span>					
							</div>
							<button className="h-12 rounded-lg transition-colors bg-yellow-300 text-purple-700 text-sm font-semibold hover:bg-purple-700 hover:text-yellow-300">
								Güncelle
							</button>
							
						</div>
					</div>
				</div>
			
		
	)
}

export default Language