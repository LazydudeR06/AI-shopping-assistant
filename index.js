import React from "react";
export default (props) => {
	return (
		<div className="flex flex-col bg-[#FFFFFF]">
			<div className="self-stretch bg-[#FEFFFC] h-[1080px]">
				<div className="flex justify-between items-center self-stretch bg-[#FFFBE4] pt-[11px] pb-[11px] pl-[112px] pr-[100px] mb-[151px]">
					<div className="flex items-center">
						<span className="text-[#000000] text-[40px] font-bold mr-[57px]" >
							{"Shoppin.AI"}
						</span>
						<span className="text-[#626262] text-[24px] font-bold" >
							{"Your personal AI-assisted shopping assistant"}
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-[#000000] text-[20px] font-bold" >
							{"For Support"}
						</span>
						<span className="text-[#626262] text-[28px] font-bold" >
							{"+91 88888 88888"}
						</span>
					</div>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wtwT5yrIcQ/vepo078y.png"} 
						className="w-[28px] h-[28px] object-fill"
					/>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wtwT5yrIcQ/rk05v51h.png"} 
						className="w-[34px] h-[34px] object-fill"
					/>
				</div>
				<div className="self-stretch bg-[#FFFFFF] h-[667px] mb-[46px] ml-[50px] mr-[211px] rounded-[16px] border-[2px] border-solid border-[#9D9D9D]">
				</div>
				<div className="self-stretch bg-[#D9D9D9] h-[73px] mb-[57px] ml-[54px] mr-[211px] rounded-[56px]">
				</div>
			</div>
		</div>
	)
}