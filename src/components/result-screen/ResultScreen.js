import React from "react";
import "./result-screen.css";

const ResultScreen = props => {
  /*

ResultScreen component is created after the quiz has finished
and the user gets the result (what instrument they should learn)
it requires a title, an icon and the content prop 

it also requires props for affiliate course and gear links for the 
buttons


*/

  let value = props.value;

  
  let budgetRangeElectric;
  if (value <= 150) {
    budgetRangeElectric =
      "https://www.amazon.com/Electric-Accessories-Beginner-Starter-Package/dp/B00479EI76/ref=zg_bs_11971381_39?_encoding=UTF8&psc=1&refRID=QYR251XN65WY4FBCVHJN";
  } else if (value <= 250) {
    budgetRangeElectric =
      "https://www.amazon.com/dp/B00A6D50L0/ref=psdc_11971421_t1_B0002CZUTW";
  } else if (value <= 350) {
    budgetRangeElectric =
      "https://www.amazon.com/Epiphone-SG-Special-Electric-Guitar-KillPot/dp/B0002D01IG?tag=musiccritic-search-20&th=1";
  } else if (value <= 500) {
    budgetRangeElectric =
      "https://www.amazon.com/Epiphone-SG-Special-Electric-Guitar-KillPot/dp/B0002D01IG?tag=musiccritic-search-20&th=1";
  } else if (value <= 650) {
    budgetRangeElectric =
      "https://www.amazon.com/dp/B005L2UAZ2/ref=sspa_dk_detail_7?psc=1&pd_rd_i=B005L2UAZ2";
  } else if (value <= 3000) {
    budgetRangeElectric =
      "https://www.amazon.com/dp/B07DR97ZKB/ref=sspa_dk_detail_3?pd_rd_i=B07DRB6NLD&pd_rd_w=96rMg&pf_rd_p=2bd81721-c115-4b8d-93a3-2ecd17466ded&pd_rd_wg=4oHYq&pf_rd_r=QDSCB4DMMR58T18ZHK3Y&pd_rd_r=8c7f9709-35b7-11e9-a429-11907865bf9e&th=1";
  } else if (value >= 3050) {
    budgetRangeElectric =
      "https://www.amazon.com/Gibson-2016-Studio-Electric-Guitar/dp/B01615FMWS/ref=sr_1_6?keywords=gibson&qid=1550740021&rnid=2941120011&s=musical-instruments&sr=1-6";
  }

  let budgetRangePiano;

  if (value <= 150) {
    budgetRangePiano = "https://www.amazon.com/dp/B074VGGRWX/ref=dp_cerb_1";
  } else if (value <= 200) {
    budgetRangePiano =
      "https://www.amazon.com/Casio-CTK2400-PPK-Portable-Headphones/dp/B00JZEW4XS/ref=as_li_ss_tl?ie=UTF8&qid=1447280817&sr=8-1&keywords=casio+ctk&linkCode=sl1&tag=ha-cp-il-20&linkId=c45e2541c0497a14e536fc9650914903";
  } else if (value <= 300) {
    budgetRangePiano =
      "https://www.amazon.com/Casio-CTK2400-PPK-Portable-Headphones/dp/B00JZEW92Y/ref=as_li_ss_tl?ie=UTF8&qid=1447280817&sr=8-1&keywords=casio+ctk&th=1&linkCode=ll1&tag=ha-cp-il-20&linkId=40694375c802c6389f0314742d032b88";
  } else if (value <= 500) {
    budgetRangePiano =
      "https://www.amazon.com/Casio-Privia-PX160BK-88-Key-Digital/dp/B0100RBPTC/ref=as_li_ss_tl?ie=UTF8&qid=1447278599&sr=8-6&keywords=casio+digital+piano&linkCode=sl1&tag=ha-cp-il-20&linkId=f6e1bc69cbf0cfd5c2f5fd7a87b05525";
  } else if (value <= 800) {
    budgetRangePiano =
      "https://www.amazon.com/Casio-PX350-BK-Intelligent-Resonation/dp/B0094D3JI4/ref=as_li_ss_tl?ie=UTF8&qid=1447278526&sr=8-6&keywords=casio+privia&pebp=1447278793953&perid=1QH6ZF0CAY073Y5T6E27&linkCode=sl1&tag=ha-cp-il-20&linkId=6c17018569fe1c0af2ccdea143654ee1";
  } else if (value <= 900) {
    budgetRangePiano =
      "https://www.amazon.com/dp/B01DW69ZTA/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=ha-cp-il-20&linkId=2ed874babe9e1db029adb3f74241a2a9&th=1";
  } else if (value <= 1000) {
    budgetRangePiano =
      "https://www.amazon.com/Casio-PX870-Privia-Digital-Black/dp/B074FTLNK3/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=ha-cp-il-20&linkId=502997d1b848f4c1de38501ab638e302";
  } else if (value <= 1300) {
    budgetRangePiano =
      "https://www.amazon.com/Yamaha-YDP163B-Arius-Console-Digital/dp/B01DW69ZMW/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=ha-cp-il-20&linkId=54405d21130590e0edc5cf22503331f0";
  } else if (value <= 1600) {
    budgetRangePiano =
      "https://www.amazon.com/Yamaha-YDP163B-Arius-Console-Digital/dp/B01DW69ZMW/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=ha-cp-il-20&linkId=54405d21130590e0edc5cf22503331f0";
  } else if (value <= 2000) {
    budgetRangePiano =
      "https://www.amazon.com/Yamaha-YDP163B-Arius-Console-Digital/dp/B01DW69ZMW/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=ha-cp-il-20&linkId=54405d21130590e0edc5cf22503331f0";
  } else if (value <= 3000) {
    budgetRangePiano =
      "https://www.amazon.com/dp/B077YT617Y/ref=as_li_ss_tl?_encoding=UTF8&psc=1&linkCode=ll1&tag=ha-cp-il-20&linkId=5fde6c9aaa44d5919bf6ae09626e9629";
  } else if (value >= 3050) {
    budgetRangePiano =
      "https://usa.yamaha.com/products/musical_instruments/pianos/upright_pianos/index.html";
  }

  let budgetRangeViolin;

  if (value <= 100) {
    budgetRangeViolin =
      "https://www.amazon.com/Mendini-Antique-Violin-Shoulder-Strings/dp/B002026DR0/ref=sxbs_sxwds-stvp?keywords=violins&pd_rd_i=B002026DR0&pd_rd_r=6fbd5a4a-a49f-4140-9d42-73f7543fe4f3&pd_rd_w=hXwGv&pd_rd_wg=kqFnm&pf_rd_p=5c5ea0d7-2437-4d8a-88a7-ea6f32aeac11&pf_rd_r=KEP3TGD8C3H9S3YSYNQ5&qid=1550783334&s=gateway";
  } else if (value <= 150) {
    budgetRangeViolin =
      "https://www.amazon.com/Cecilio-CVN-300-Solidwood-DAddario-Prelude/dp/B00EOYKGH0?tag=musiccritic-search-20";
  } else if (value <= 250) {
    budgetRangeViolin =
      "https://www.amazon.com/Stentor-1400C2-3-4-4-String-Violin/dp/B074W5BT5W/ref=dp_ob_title_ce";
  } else if (value <= 400) {
    budgetRangeViolin =
      "https://www.amazon.com/Stentor-1550-4-Violin/dp/B003QIV6FG?tag=musiccritic-search-20";
  } else if (value <= 700) {
    budgetRangeViolin =
      "https://www.amazon.com/Antique-Violin-Strad-Model-Clear/dp/B0773W8WF3/ref=sr_1_50_sspa?keywords=violins&qid=1550783373&s=gateway&sr=8-50-spons&psc=1";
  } else if (value <= 1500) {
    budgetRangeViolin =
      "https://www.amazon.com/Maestro-Strad-Powerful-Antique-Varnish/dp/B071DSHDMM/ref=sr_1_153_sspa?keywords=violins&qid=1550783609&s=gateway&sr=8-153-spons&psc=1&smid=A3IC7YNSYCN4WI";
  } else if (value >= 1550) {
    budgetRangeViolin =
      "https://www.amazon.com/Strad-Model-Violin-Professional-Handmade/dp/B00FTRP5LI/ref=sr_1_53?keywords=violins&qid=1550783373&s=gateway&sr=8-53";
  }

  let budgetRangeVocals;

  if (value <= 100) {
    budgetRangeVocals =
      "https://www.amazon.com/ZINGYOU-Microphone-BM-800-Adjustable-Double-layer/dp/B01MZCS8MY/ref=sr_1_5?ie=UTF8&qid=1550785472&sr=8-5&keywords=recording+bundle";
  } else if (value <= 200) {
    budgetRangeVocals =
      "https://www.amazon.com/PreSonus-Studio-Headphones-Microphone-StudioOne/dp/B004LLV04E/ref=sr_1_8?ie=UTF8&qid=1550785472&sr=8-8&keywords=recording+bundle";
  } else if (value <= 300) {
    budgetRangeVocals =
      "https://www.amazon.com/Focusrite-Scarlett-Studio-Interface-Recording/dp/B01E6T54E2/ref=sr_1_3?ie=UTF8&qid=1550785472&sr=8-3&keywords=recording+bundle";
  }

  let budgetRangeAcoustic;

  if (value <= 100) {
    budgetRangeAcoustic =
      "https://www.amazon.com/RA-090-Dreadnought-Acoustic-Guitar-Black/dp/B005PFPNIO?tag=guitarfcom-20";
  } else if (value <= 250) {
    budgetRangeAcoustic =
      "https://www.amazon.com/Bristol-BD-16-Dreadnaught-Acoustic-Guitar/dp/B001OMI41A?tag=guitarfcom-20";
  } else if (value <= 300) {
    budgetRangeAcoustic =
      "https://www.amazon.com/Yamaha-FG830-Acoustic-Guitar-Natural/dp/B01CFOAQP2?tag=guitarfcom-20";
  } else if (value <= 450) {
    budgetRangeAcoustic =
      "https://www.amazon.com/Seagull-S6-Original-Acoustic-Guitar/dp/B000RW0GT6?tag=guitarfcom-20";
  } else if (value >= 540) {
    budgetRangeAcoustic =
      "https://www.amazon.com/Taylor-Academy-Grand-Concert-Electronics/dp/B01NAWQ1EU?tag=guitarfcom-20";
  }

  let budgetRangeDrums;

  if (value <= 300) {
    budgetRangeDrums =
      "https://www.amazon.com/Gammon-Percussion-Complete-Cymbals-Stands/dp/B002RGPQJ0/ref=pd_sbs_267_2/143-2262195-7016839?_encoding=UTF8&pd_rd_i=B002RGPQJ0&pd_rd_r=63d994f0-362e-11e9-baf7-ef6914df907a&pd_rd_w=0QviP&pd_rd_wg=9yPbk&pf_rd_p=588939de-d3f8-42f1-a3d8-d556eae5797d&pf_rd_r=ZY1TQJ312R49VSAZTSBV&psc=1&refRID=ZY1TQJ312R49VSAZTSBV";
  } else if (value <= 400) {
    budgetRangeDrums =
      "https://www.amazon.com/LUDWIG-LC179XO16-BREAKBEATS-QUESTLOVE-Drumsets/dp/B00IFYOCJI?SubscriptionId=AKIAIPHVZTVH6LZ5BFZA&tag=hawk-future-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00IFYOCJI&ascsubtag=mrd-1311457345958321093-20";
  } else if (value <= 500) {
    budgetRangeDrums =
      "https://www.amazon.com/Pearl-Drum-Piece-RS525SC-C707/dp/B00NJVS32Y/ref=pd_sbs_267_6/143-2262195-7016839?_encoding=UTF8&pd_rd_i=B00NJVS32Y&pd_rd_r=63d994f0-362e-11e9-baf7-ef6914df907a&pd_rd_w=0QviP&pd_rd_wg=9yPbk&pf_rd_p=588939de-d3f8-42f1-a3d8-d556eae5797d&pf_rd_r=ZY1TQJ312R49VSAZTSBV&psc=1&refRID=ZY1TQJ312R49VSAZTSBV";
  } else if (value <= 600) {
    budgetRangeDrums =
      "https://www.amazon.com/Pearl-Roadshow-RS525WFC-C31-5-Piece/dp/B00NJVS2ZC/ref=pd_sbs_267_9?_encoding=UTF8&pd_rd_i=B00NJVS2ZC&pd_rd_r=5fda0536-362e-11e9-9811-274d63e66d10&pd_rd_w=PNJeP&pd_rd_wg=BeTdF&pf_rd_p=588939de-d3f8-42f1-a3d8-d556eae5797d&pf_rd_r=HMEQ07X0D83ZC3ZVQ9M4&psc=1&refRID=HMEQ07X0D83ZC3ZVQ9M4";
  } else if (value <= 700) {
    budgetRangeDrums =
      "https://www.amazon.com/Yamaha-Stage-Custom-Birch-Shell/dp/B00J1MGSUE/ref=pd_sbs_267_2/143-2262195-7016839?_encoding=UTF8&pd_rd_i=B00J1MGSUE&pd_rd_r=5fda0536-362e-11e9-9811-274d63e66d10&pd_rd_w=PNJeP&pd_rd_wg=BeTdF&pf_rd_p=588939de-d3f8-42f1-a3d8-d556eae5797d&pf_rd_r=HMEQ07X0D83ZC3ZVQ9M4&psc=1&refRID=HMEQ07X0D83ZC3ZVQ9M4";
  } else if (value >= 1000) {
    budgetRangeDrums =
      "https://www.amazon.com/Mapex-Saturn-Exotic-3-Piece-Natural/dp/B07114JZ4S?SubscriptionId=AKIAIPHVZTVH6LZ5BFZA&tag=hawk-future-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B07114JZ4S&ascsubtag=mrd-4421230771107741115-20";
  }

  let budgetRangeBass;

  if (value <= 150) {
    budgetRangeBass =
      "https://www.amazon.com/Electric-Guitar-Starter-Beginner-Package/dp/B003GWQJUE?tag=guitarfcom-20";
  } else if (value <= 200) {
    budgetRangeBass =
      "https://www.amazon.com/Squier-Fender-Vintage-Modified-Special/dp/B004VSQ5LU?tag=guitarfcom-20";
  } else if (value <= 300) {
    budgetRangeBass =
      "https://www.amazon.com/Yamaha-TRBX174EW-TBS-4-String-Electric/dp/B00TE7YRPY?tag=guitarfcom-20";
  } else if (value <= 400) {
    budgetRangeBass =
      "https://www.amazon.com/Ibanez-SR370-SPB-Sapphire-Blue/dp/B00E5L63LA?tag=guitarfcom-20";
  } else if (value <= 500) {
    budgetRangeBass =
      "https://www.amazon.com/Schecter-OMEN-4-4-String-Guitar-Walnut/dp/B00740BEBI?tag=guitarfcom-20";
  } else if (value >= 1000) {
    budgetRangeBass =
      "https://www.amazon.com/Fender-American-Elite-Precision-Bass/dp/B019I3P9FA/ref=sr_1_15?s=musical-instruments&ie=UTF8&qid=1550794743&sr=1-15&keywords=bass";
  }

  let budgetRangeSax;

  if (value <= 200) {
    budgetRangeSax =
      "https://www.amazon.com/Saxophone-Driver-Nipper-gloves-Cleaning/dp/B010F2QVEQ/)/ref=as_li_ss_tl?&imprToken=EYMIMjHtQJmfrLm-EGH9Sw&slotNum=3&linkCode=sl1&tag=cmuse4425-20&linkId=c30c4320ee5f1cd5a24e6adad5372bc0&imprToken=a2n1cb5xAnHcNbRzc3gdbQ&slotNum=10&linkCode=w61&imprToken=oP00Yy4F4LJXnlbq5kyohg&slotNum=7";
  } else if (value <= 300) {
    budgetRangeSax =
      "https://www.amazon.com/Mendini-MTS-L-92D-Saxophone-Mouthpiece/dp/B00506UBUI/)/ref=as_li_ss_tl?&imprToken=EYMIMjHtQJmfrLm-EGH9Sw&slotNum=1&linkCode=sl1&tag=cmuse4425-20&linkId=d2bdc14bed61003a98fddc4adbe62500&imprToken=a2n1cb5xAnHcNbRzc3gdbQ&slotNum=9&linkCode=w61&imprToken=oP00Yy4F4LJXnlbq5kyohg&slotNum=3";
  } else if (value <= 400) {
    budgetRangeSax =
      "https://www.amazon.com/Etude-EAS-100-Student-Saxophone-Lacquer/dp/B001P3XFPI/)/ref=as_li_ss_tl?&imprToken=EYMIMjHtQJmfrLm-EGH9Sw&slotNum=5&linkCode=sl1&tag=cmuse4425-20&linkId=fa25cbf9cb900ff20e63d931dba7285e&imprToken=a2n1cb5xAnHcNbRzc3gdbQ&slotNum=12&linkCode=w61&imprToken=oP00Yy4F4LJXnlbq5kyohg&slotNum=110";
  } else if (value <= 500) {
    budgetRangeSax =
      "https://www.amazon.com/Jean-Paul-USA-AS-400-Saxophone/dp/B006WAVQKA/)/ref=as_li_ss_tl?&imprToken=EYMIMjHtQJmfrLm-EGH9Sw&slotNum=2&linkCode=sl1&tag=cmuse4425-20&linkId=a3cd19f7eaf933a11bb54408ecf454c7&imprToken=a2n1cb5xAnHcNbRzc3gdbQ&slotNum=1&imprToken=nd0fN0SQxDunD-1uTYEohw&slotNum=1&linkCode=w61&imprToken=oP00Yy4F4LJXnlbq5kyohg&slotNum=5";
  } else if (value >= 1000) {
    budgetRangeSax =
      "https://www.amazon.com/YAMAHAYAS-280-Saxophones-student-saxophones/dp/B007G3T79E/)/ref=as_li_ss_tl?&imprToken=EYMIMjHtQJmfrLm-EGH9Sw&slotNum=4&linkCode=sl1&tag=cmuse4425-20&linkId=e36f8b9bd7e4949949f78628b91a1bb4&imprToken=a2n1cb5xAnHcNbRzc3gdbQ&slotNum=5&imprToken=nd0fN0SQxDunD-1uTYEohw&slotNum=2&linkCode=w61&imprToken=oP00Yy4F4LJXnlbq5kyohg&slotNum=9";
  }
  let gearLinks = [
    budgetRangeAcoustic,
    budgetRangeElectric,
    budgetRangePiano,
    budgetRangeDrums,
    budgetRangeViolin,
    budgetRangeSax,
    budgetRangeVocals,
    budgetRangeBass
  ];

  let courseLinks = [
    "https://www.udemy.com/acoustic-guitar-redefined/",
    "https://www.udemy.com/rock-guitar-masterclass/",
    "https://www.udemy.com/pianoforall-incredible-new-way-to-learn-piano-keyboard/",
    "https://www.udemy.com/learndrums/",
    "https://www.udemy.com/beginner-violin-lessons-violin-master-course/",
    "https://www.udemy.com/saxophone-a-beginners-guide/",
    "https://www.udemy.com/become-a-great-singer-your-complete-vocal-training-system/",
    "https://www.udemy.com/the-professional-bass-masterclass/"
  ];

  let resultText;

  let instrument = props.instrument;

  if (instrument === 0) {
    resultText = (
      <div className="resultText">
        <p>
          <i>
            The <strong>heart</strong> of any party or outdoor gathering with
            friends
          </i>
          , you can <strong>charm</strong> everyone within one mile radius (more
          with practice) around you to join the song and{" "}
          <strong>elevate</strong> the atmosphere. Acoustic Guitar is mobile,{" "}
          <strong>sweet</strong>, and goes along with the sound of{" "}
          <strong>fire</strong> crackling. It is also very{" "}
          <strong>versatile</strong> across many genres which allows everyone to
          play something they like. Learning Acoustic Guitar will enable you to
          advance futher into eletrical or bass guitars too!
        </p>
        <br />

        <p>
          <strong>Start learning</strong> it now from one of the{" "}
          <strong>best instructors</strong> and checkout this{" "}
          <strong>trustworthy</strong> gear online that we have hand selected
          for you. This course and this gear are helping thousands of people to
          go from full beginners to <strong>rockstars</strong>. <br />
        </p>
      </div>
    );
  } else if (instrument === 1) {
    resultText = (
      <div className="resultText">
        <p>
          <i>If all instruments were sisters</i>, electrical guitar would be the{" "}
          <strong>sexiest</strong>, <strong>meanest</strong>,{" "}
          <strong>fastest</strong> and the most <strong>open minded</strong>.
          You can make it gallop alongside Metallica at 212 BPM or make it sing
          softer and <strong>smoother</strong> than any vocalist just like{" "}
          <strong>
            <a
              className="links"
              href="https://www.youtube.com/watch?v=6Whgn_iE5uc"
            >
              Santana
            </a>
          </strong>{" "}
          does. It's versatility allows any player to find something they like.
        </p>
        <br />
        <p>
          <strong>Start learning</strong> it now from one of the{" "}
          <strong>best instructors</strong> and checkout this{" "}
          <strong>trustworthy</strong> gear online that we have hand selected
          for you. This course and this gear are helping thousands of people to
          go from full beginners to <strong>rockstars</strong>. <br />
        </p>
      </div>
    );
  } else if (instrument === 2) {
    resultText = (
      <div className="resultText">
        <p>
          <i>The most elegant of all instruments</i>, piano is a choice of an{" "}
          <strong>intelligent</strong> and <strong>sophisticated</strong>{" "}
          individual with <strong>passion</strong> for <strong>melody</strong>.
          Or a complete opposite by mastering the dirty <strong>bluesy</strong>{" "}
          sound that you can hear{" "}
          <strong>
            <a
              className="links"
              href="https://www.youtube.com/watch?v=i8DRen60X10"
              target="blank"
            >
              Ray Charles
            </a>
          </strong>{" "}
          play somewhere in a cigar bar. Piano is great to learn because of the
          discipline and the theory of music that comes with any{" "}
          <strong>grand</strong> instrument.
        </p>
        <br />
        <p>
          <strong>Start learning</strong> it now from one of the{" "}
          <strong>best instructors</strong> and checkout this{" "}
          <strong>trustworthy</strong> gear online that we have hand selected
          for you. This course and this gear are helping thousands of people to
          go from full beginners to <strong>virtuoso</strong>.<br />
        </p>
      </div>
    );
  } else if (instrument === 3) {
    resultText = (
      <div className="resultText">
        <p>
          <i>
            If everyone drums when they are bored, does that mean drummers are
            just boring people? <strong>Absolutely</strong> not! Without Drums,
            songs would sound a lot like <strong>traffic jams</strong> (A.K.A
            jazz).{" "}
          </i>
          You can hear drums in almost <strong>any</strong> song today which
          means it is open to almost all genres but also it is very in{" "}
          <strong>demand!</strong> If it wasn't that much <strong>fun</strong>,
          people wouldn't be drumming on tables with silverware all the time.
        </p>
        <br />
        <p>
          <strong>Start learning</strong> it now from one of the{" "}
          <strong>best instructors</strong> and get this{" "}
          <strong>trustworthy</strong> gear online that we have hand selected
          for you. This course and this gear are helping thousands of people to
          go from full beginners to <strong>rockstars</strong>. <br />
        </p>
      </div>
    );
  } else if (instrument === 4) {
    resultText = (
      <div className="resultText">
        <p>
          <i>
            Instrument that was made exclusively for{" "}
            <strong>
              <a className="links" href="https://youtu.be/GRxofEmo3HA?t=1969">
                Vivaldi
              </a>
            </strong>
          </i>
          , violin is the <strong>softest</strong>, most{" "}
          <strong>romantic</strong> and <strong>melodic</strong> instrument of
          all. You can feel <strong>strong</strong> emotions with each bow of an
          artist. Albeit you usually hear violins acompany classical orchestras,
          it's unique sound can be used in almost any genre to add flavour to
          the song.
        </p>
        <br />
        <p>
          <strong>Start learning</strong> it now from one of the{" "}
          <strong>best instructors</strong> and checkout this{" "}
          <strong>trustworthy</strong> gear online that we have hand selected
          for you. This course and this gear are helping thousands of people to
          go from full beginners to <strong>virtuoso</strong>. <br />
        </p>
      </div>
    );
  } else if (instrument === 5) {
    resultText = (
      <div className="resultText">
        <p>
          <i>
            Pink panther's weapon of choice has been <strong>misspelled</strong>{" "}
            the most in the instrument family, but even then the{" "}
            <strong>nature</strong> of the instrument remains the same.{" "}
          </i>
          <strong>Sexaphone</strong> is the most elegant and unique instrument
          that people learn to play. Spotlight and saxophone usually come in one
          package, as it's primary application is overshadowing other
          instruments in any orchestra or band where it sounds.
        </p>
        <br />
        <p>
          <strong>Start learning</strong> it now from one of the{" "}
          <strong>best instructors</strong> and get this{" "}
          <strong>trustworthy</strong> gear online that we have hand selected
          for you. This course and this gear are helping thousands of people to
          go from full beginners to <strong>rockstars</strong>. <br />
        </p>
      </div>
    );
  } else if (instrument === 6) {
    resultText = (
      <div className="resultText">
        <p>
          <i>
            You are the most <strong>famous (or infamous)</strong> and{" "}
            <strong>important</strong> artist in your band.{" "}
          </i>
          People will support <strong>any</strong> political opinion that you
          share, which explains many bizare things in this world. However, to
          get there you must be confident and persistent because Vocals are one
          of the hardest instruments to master. The <strong>good news</strong>{" "}
          is that you don't have to be a born singer to do it!
        </p>
        <br />
        <p>
          <strong>Start learning</strong> it now from one of the{" "}
          <strong>best instructors</strong> and checkout this{" "}
          <strong>trustworthy</strong> gear online that we have hand selected
          for you. This course and this gear are helping thousands of people to
          go from full beginners to <strong>rockstars</strong>. <br />
        </p>
      </div>
    );
  } else if (instrument === 7) {
    resultText = (
      <div className="resultText">
        <p>
          <i>Without a doubt, the most underrated instrument of all time.</i>{" "}
          Bass Guitar is an <strong>important</strong> factor when it comes to
          producing <strong>high quality</strong> music, but due to it's...bass,
          not many people can instantly recognize the important contribution
          that bass guitar <strong>artists make</strong>, but it is there{" "}
          <i>(or so they say)</i>. More modern musical genres base their songs
          of the bass rhythm, which makes it very high in demand. It is a very{" "}
          <strong>fun</strong> and <strong>open minded.</strong>
        </p>
        <br />
        <p>
          <strong>Start learning</strong> it now from one of the{" "}
          <strong>best instructors</strong> and get this{" "}
          <strong>trustworthy</strong> gear online that we have hand selected
          for you. This course and this gear are helping thousands of people to
          go from full beginners to <strong>rockstars</strong>. <br />
        </p>
      </div>
    );
  }

  return (
    <div className="resultContainer">
      <img className="resultIcon" alt="piano icon" src={props.icon} />
      <h2 className="resultTitle">{props.title}</h2>
      {resultText}
      <span className="discount">
        <strong>Special discount applies!</strong>
      </span>
      <div className="buttonContainer">
        <a href={courseLinks[instrument]}>
          <div className="button">
            <span>Start Learning!</span>
          </div>
        </a>
        <a href={gearLinks[instrument]}>
          <div className="button">
            <span>Buy Gear</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ResultScreen;
