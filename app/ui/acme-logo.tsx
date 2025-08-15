import { GlobeAltIcon } from '@heroicons/react/24/outline';
// If your fonts file is actually at 'app/ui/fonts.ts', use the following import:
import { lusitana } from '@/app/ui/fonts';

// Or, if the correct path is different, update accordingly, e.g.:
// import { lusitana } from '../fonts';
// import { lusitana } from '../../fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
