import Image from 'next/image'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { TfiAnnouncement } from 'react-icons/tfi';

export default function StoryPreview({ data }: any) {
  const imgURL = data.image ? URL.createObjectURL(data.image) : null;

  return (
    <div id='story' style={{ backgroundImage: "url(/endless-clouds.svg)" }} className='rounded-xl relative overflow-hidden'>
      <div className="w-[360px] h-[640px] bg-gradient-to-t from-[#BBE1FA]/90 to-[#3282B8] text-black p-4 flex flex-col justify-between border rounded-xl shadow-lg">
        <div>
          <div className='flex justify-center'>
            <div className="flex items-center shadow shadow-[#0F4C75] bg-white ps-4 pe-2 py-1 rounded-full">
              <div className='me-1'>
                <Image src={"/LOGO UNSIL.png"} alt='logo' width={500} height={500} className='w-8' />
              </div>
              <div>
                <Image src={"/Logo_FT_UNSIL.png"} alt='logo' width={500} height={500} className="w-[34px]" />
              </div>
              <div className='-me-1'>
                <Image src={"/AIS.png"} alt='logo' width={500} height={500} className='w-10' />
              </div>
              <div>
                <Image src={"/Logo BLU Speed.png"} alt='logo' width={500} height={500} className='w-12' />
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-4'>
            <div className='bg-red-500 rounded text-white px-4 py-1 font-bold flex items-center gap-2 text-xs'><TfiAnnouncement />live report</div>
          </div>
          <h2 className="text-white font-bold text-3xl uppercase 
             drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] 
             [text-shadow:_2px_2px_0_#3282B8,_-2px_-2px_0_#3282B8,_2px_-2px_0_#3282B8,_-2px_2px_0_#3282B8] text-center italic mt-2">
            WEBINAR AIS V
          </h2>

          <div className='min-h-60 max-h-96 bg-[#3282B8] rounded-xl flex flex-col items-center p-4 border-4 border-white mt-6'>
            {imgURL && (
              <div className="flex-1 mb-4">
                <img src={imgURL} alt="Uploaded" className="w-full object-cover rounded" />
              </div>
            )}
            <p className='text-blue-100 text-xs text-center mb-2'>{data.description}</p>
            <p className='text-white text-sm text-center font-medium'>{data.speaker}</p>
          </div>
        </div>


        <div className='flex text-xs shadow shadow-[#0F4C75] bg-[#3282B8] mx-auto py-1 px-4 text-white rounded-full items-center gap-1 z-20'>
          <AiOutlineYoutube className='text-xl' />
          <AiOutlineInstagram className='text-xl' />
          <p>ai.siliwangi</p>
          <MdOutlineEmail className='text-xl' />
          <p>ai-siliwangi@unsil.ac.id</p>
        </div>
      </div>

      <div className='flex justify-center'>
        <Image src={"/Maung.png"} alt='maung' width={500} height={500} className='absolute -bottom-6 w-32 mx-auto' />
      </div>
    </div>
  );
}
