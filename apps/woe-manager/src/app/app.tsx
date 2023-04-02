// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import Player from './player/player';

export function App() {
  const viewType = 'table';

  return (
    // <>
    <div className="bg-slate-100 w-full lg:h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center py-4 font-montserrat">
          <img
            src="./assets/guild-logo/logo-round.svg"
            alt="logo"
            className="w-24"
          />
          One World
        </div>
        <div className="flex flex-col w-3/4">
          <div className="flex">
            <button className="ml-3 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2 text-gray-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>

              <span className="text-gray-600">Основной вид</span>
            </button>

            <button className="ml-3 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                />
              </svg>
              <span className="text-gray-600">Детали</span>
            </button>
          </div>
          <div className="border-b border-gray-200 my-4"></div>
          <div className="p-4 flex flex-col lg:flex-row space-y-4 md:space-y-0 space-x-4 justify-center items-center">
            <div className="flex flex-col md:flex-row lg:flex-col md:space-x-4 lg:md:space-x-0 space-y-4 md:space-y-0 lg:space-y-4 w-full md:w-full lg:w-fit flex-shrink-0">
              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-red-400 bg-red-100 px-3 py-1 rounded-full">
                    Team 1
                  </span>
                </div>
                <ul>
                  <li className="text-2xl md:text-base">
                    <Player job="slayer" name="Dren." isLeader={true}></Player>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <Player job="saint" name="MedSestra"></Player>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Техничный
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/chronomancer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    RefLekSeR
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/divine-avenger.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    TuTanHamon
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/tyrant.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    GoblinSlayer
                  </li>
                </ul>
              </div>

              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-red-400 bg-red-100 px-3 py-1 rounded-full">
                    Team 2
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/novice-guardian.png"
                      className="w-10 md:w-6 mr-1"
                      alt="novice guardian"
                    />
                    <strong>JuggerON</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                      alt="saint"
                    />
                    Биотрикс
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/light-bringer.png"
                      className="w-10 md:w-6 mr-1"
                      alt="light bringer"
                    />
                    BOF
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/tyrant.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    PsZerg
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/rune-master.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Alaska
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/novice-guardian.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    I1fe
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-col md:space-x-4 lg:md:space-x-0 space-y-4 md:space-y-0 lg:space-y-4 w-full md:w-full lg:w-fit flex-shrink-0">
              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-cyan-400 bg-cyan-100 px-3 py-1 rounded-full">
                    Team 3
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/yamata.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>Бутерборг</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Goodwill
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Бутерборг
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/chronomancer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Pumano
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/divine-avenger.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    spoiler
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/soul-binder.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    RWlKeHHu
                  </li>
                </ul>
              </div>

              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-cyan-400 bg-cyan-100 px-3 py-1 rounded-full">
                    Team 4
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/thanatos.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>ИЛЬС</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Kpocc
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Nefertiti
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/blade-soul.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Cruu
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/apocalypse.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Dieb
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/dragon-fist.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    TheVoid
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-col md:space-x-4 lg:md:space-x-0 space-y-4 md:space-y-0 lg:space-y-4 w-full md:w-full lg:w-fit flex-shrink-0">
              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-blue-400 bg-blue-100 px-3 py-1 rounded-full">
                    Team 5
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/thanatos.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>PWNZ</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Локи
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/begetter.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    spmDen
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/inferno-armor.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Koksaaa
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saitama.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    AngelsMustDie
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/solar-trouvere.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    alexP
                  </li>
                </ul>
              </div>

              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-blue-400 bg-blue-100 px-3 py-1 rounded-full">
                    Team 6
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>Frye</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/slayer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Naginashka
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/yamata.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Shepot
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/tyrant.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Крысавчик
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/divine-avenger.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    SKAlpel
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/chronomancer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Крисс
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-col md:space-x-4 lg:md:space-x-0 space-y-4 md:space-y-0 lg:space-y-4 w-full md:w-full lg:w-fit flex-shrink-0">
              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-violet-400 bg-violet-100 px-3 py-1 rounded-full">
                    Team 7
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/spirit-whisperer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>Yodji</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    FeSH
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/blade-soul.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Pirojok
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/chronomancer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Insömnia 侍の娘
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/divine-avenger.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Shaftik
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/blade-soul.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    theOrange
                  </li>
                </ul>
              </div>

              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-violet-400 bg-violet-100 px-3 py-1 rounded-full">
                    Team 8
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/spirit-whisperer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>Котишка</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Кейми
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/slayer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    WolfZh
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/divine-avenger.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Динтра
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/tyrant.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Eagleeye
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/solar-trouvere.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Dimontus
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-col md:space-x-4 lg:md:space-x-0 space-y-4 md:space-y-0 lg:space-y-4 w-full md:w-full lg:w-fit flex-shrink-0">
              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-green-400 bg-green-100 px-3 py-1 rounded-full">
                    Team 9
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/chronomancer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>Charmander</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Аэлия
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/divine-avenger.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    NitraT
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/yamata.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    karasik
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/spirit-whisperer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    NoDrama
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/begetter.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Shinji
                  </li>
                </ul>
              </div>

              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-green-400 bg-green-100 px-3 py-1 rounded-full">
                    Team 10
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/slayer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>azzol</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/arcane-master.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    unnamed
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/chronomancer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Йеннифэр
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/tyrant.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Lightning
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Милисента
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/divine-avenger.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    EdwardElr1k
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-col md:space-x-4 lg:md:space-x-0 space-y-4 md:space-y-0 lg:space-y-4 w-full md:w-full lg:w-fit flex-shrink-0">
              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-pink-400 bg-pink-100 px-3 py-1 rounded-full">
                    Team 11
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/novice-guardian.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>NiCO</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Telekhova
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/arcane-master.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    wiz
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/novice-guardian.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Urus
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/blade-soul.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Acolla
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/rune-master.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Ипыч
                  </li>
                </ul>
              </div>

              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-pink-400 bg-pink-100 px-3 py-1 rounded-full">
                    Team 12
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>Плечевая</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/slayer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Бесполезная
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/chronomancer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Рихоку
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/blade-soul.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Dieb_cross
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/divine-avenger.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    evgeshalksv
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/solar-trouvere.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    eke_club
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-col md:space-x-4 lg:md:space-x-0 space-y-4 md:space-y-0 lg:space-y-4 w-full md:w-full lg:w-fit flex-shrink-0">
              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-amber-400 bg-amber-100 px-3 py-1 rounded-full">
                    Team 13
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/luna-danseuse.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>Малена</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/stellar-hunter.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Опа
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/chronomancer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    YLoo
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Ditt
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/begetter.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Scott
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/slayer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Chilee
                  </li>
                </ul>
              </div>

              <div className="flex flex-col bg-white p-4 font-montserrat text-sm rounded-md flex-1">
                <div className="pb-3">
                  <span className="text-xs text-amber-400 bg-amber-100 px-3 py-1 rounded-full">
                    Team 14
                  </span>
                </div>
                <ul>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/chronomancer.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    <strong>Rodagor</strong>
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/saint.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Goloveschka
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/blade-soul.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Shrike
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/blade-soul.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Bradlee
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/thanatos.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    MoveYourBody
                  </li>
                  <li className="flex text-2xl md:text-base">
                    <img
                      src="./assets/jobs/divine-avenger.png"
                      className="w-10 md:w-6 mr-1"
                    />
                    Nike99
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </>
  );
}

export default App;
