import {useState} from 'react'
import ReactFlagsSelect from 'react-flags-select';
import {AiOutlineClose} from 'react-icons/ai'



function Register( {setShowModal2}) {

	const [selected, setSelected] = useState('TR');

	const flags = {
		US: '+1',
		GB: '+5',
		FR: '+70',
		DE: '+30',
		IT: '+11',
		TR: '+90',
	}

	return (
		<div
			className="absolute top-10 left-10 z-50 ">        
		        	<div className="w-full sm:w-[800px] bg-gray-50 sm:rounded-lg px-5 py-3 pb-5 sm:py-6">
					<div className="  justify-items-end ">	
					<AiOutlineClose  onClick={()=> setShowModal2(false)}/>
						</div>	
						<h3 className="text-center mb-4 font-semibold text-purple-600">Kayıt ol</h3>	
					
						<div className="flex flex-col gap-y-3">
							<div className="flex gap-x-3">
								<ReactFlagsSelect
									countries={Object.keys(flags)}
									customLabels={flags}
									selected={selected}
									onSelect={code => setSelected(code)}
								/>
								<label className="relative flex-4 group">
									<input required
									       className="h-full rounded px-4 pt-2 hover:border-purple-700 focus:border-purple-700 transition-colors outline-none text-sm w-full border-2 border-gray-200 peer"/>
									<span
										className="absolute top-0 left-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-purple-600 peer-valid:h-7 peer-valid:text-xs peer-valid:text-purple-600">
									Telefon Numarası
								</span>
								</label>
							</div>
                            <div className="flex flex-col gap-y-3">
                                <input placeholder='Ad Soyad' className="h-full  rounded px-4 pt-2 hover:border-purple-700 focus:border-purple-700 transition-colors outline-none text-sm w-full border-2 border-gray-200 peer"/>
                                <input placeholder='E-posta' className="h-full rounded px-4 pt-2 hover:border-purple-700 focus:border-purple-700 transition-colors outline-none text-sm w-full border-2 border-gray-200 peer"/>
                            </div>
                          
                            <div className="relative flex-2 group   ">
                                <input type="radio" value="Türkçe" />
                            <span className="absolute top-0 left-5 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-purple-600 peer-valid:h-7 peer-valid:text-xs peer-valid:text-purple-600">
									Getir'in bana özel kampanya,tanıtım ve fırsatlardanhaberdar olmak istiyorum.
								</span>					
							
                           </div>
							<button className="h-12 rounded-lg transition-colors bg-yellow-300 text-purple-700 text-sm font-semibold hover:bg-purple-700 hover:text-yellow-300">
							Kayıt Ol
							</button>
						
						
						</div>
					</div>
				</div>
			
		
	)
}

export default Register