import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Layout from '@/components/Layout';
import Title from '@/components/Title';

// Styles
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 900px;
`;

const Home: React.FC<{}> = () => (
  <>
    <Layout>
      <Head>
        <title>TheVÏe</title>
      </Head>

      <Main>
        <Title />

        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          suscipit vestibulum nisi, in consequat elit consequat nec. Sed vitae
          massa euismod sapien bibendum consequat vitae sit amet felis. Ut
          pulvinar ultrices urna eget vestibulum. Ut eget vehicula ex. Aliquam
          at diam tincidunt, vestibulum sem id, fringilla leo. Sed quis
          hendrerit arcu. Cras semper est et libero finibus, eget bibendum sem
          rutrum. Suspendisse potenti. Suspendisse quam nulla, vehicula quis
          porta at, hendrerit sed erat.
        </p>

        <br />
        <br />

        <p>
          Aliquam imperdiet leo at elit fermentum eleifend. Donec tincidunt
          porttitor neque, sed scelerisque velit tristique id. Suspendisse
          porttitor, dui sit amet lobortis luctus, odio nisi venenatis magna,
          vel luctus urna ligula et velit. Proin sed ullamcorper odio. In
          aliquet justo vitae arcu rhoncus, a tempus metus interdum. Fusce
          gravida euismod purus, sit amet aliquam metus suscipit a. Aenean
          dictum semper lectus, id finibus dui molestie vel. Nam blandit justo
          vel nulla ultricies, eu pellentesque velit laoreet. Vestibulum cursus
          urna in odio ultrices, vitae feugiat augue feugiat. Etiam dapibus
          nulla nec maximus efficitur. Etiam ultricies lectus a dolor porttitor,
          sed porta libero dapibus.
        </p>

        <br />
        <br />

        <p>
          Donec ac sagittis nisl. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Fusce egestas massa nec suscipit sagittis. Donec
          nisl mi, tincidunt quis faucibus at, iaculis sit amet nulla. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Nulla lacinia commodo quam, in tempus arcu
          sollicitudin eu. Aenean egestas dapibus justo, nec rhoncus felis. Ut
          interdum suscipit rhoncus. Donec laoreet sed purus viverra commodo.
          Integer vel lorem turpis. Nam sed eros euismod, vulputate diam et,
          finibus magna. Donec sit amet lectus eu dolor bibendum finibus. In
          lacus orci, porta sed ultricies quis, pharetra non mauris. Ut iaculis
          ex orci, eu gravida nisi ullamcorper efficitur.
        </p>

        <br />
        <br />

        <p>
          Pellentesque nunc mi, ultricies sed varius a, malesuada at dolor.
          Aenean facilisis odio ac lacus convallis tristique quis a lacus.
          Vivamus sodales iaculis arcu, vitae pretium magna volutpat faucibus.
          Aliquam rutrum eu nisi dapibus porttitor. Praesent sapien massa,
          porttitor ac lacinia eget, interdum interdum arcu. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Aenean in arcu nec mi maximus pellentesque nec eget erat. Cras non
          nunc ut ipsum ultrices aliquam. Etiam vitae arcu quis quam ultrices
          lobortis. Donec posuere dui eget congue suscipit. Aenean molestie
          rhoncus sodales. Maecenas vitae odio risus.
        </p>

        <br />
        <br />
        <p>
          Cras sit amet velit nibh. Cras laoreet nisl eu tristique sodales. Nam
          id porta lectus, vitae congue lacus. Aenean ante erat, ultricies in
          molestie volutpat, blandit in enim. Phasellus ultricies nibh libero,
          ac pretium lorem varius eget. Cras iaculis interdum justo eleifend
          vehicula. Morbi sed tortor euismod, pellentesque risus venenatis,
          gravida nunc. Pellentesque pretium lectus at pharetra consequat. Nam
          accumsan nibh sed felis tincidunt rutrum. In mollis lacus non nisi
          ultrices vestibulum eu quis lectus. Pellentesque fringilla urna
          tellus. Curabitur hendrerit euismod ipsum, sed mattis nulla laoreet
          ac. Aliquam erat volutpat. Cras et lacus lobortis felis aliquet
          vulputate. Praesent luctus, justo ut consectetur rutrum, turpis neque
          lobortis tellus, nec vestibulum libero massa nec velit. Cras dapibus
          at arcu eget finibus.
        </p>

        <br />
        <br />
        <p>
          Donec eget odio eget nisi pretium rutrum a eu dui. Pellentesque non
          ipsum nec nibh porttitor consectetur sit amet at tortor. Etiam ornare
          viverra dui, sit amet ullamcorper neque venenatis a. Etiam imperdiet
          elit et erat porta pretium. Sed malesuada diam lacus, non dictum odio
          vulputate vitae. Quisque sed justo in diam pharetra semper non vitae
          ipsum. Curabitur a dui augue. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Suspendisse
          ullamcorper, turpis placerat porta posuere, ipsum quam tempus dui,
          vitae ultricies ligula ligula eu sapien. Proin fringilla nisl nec
          hendrerit efficitur. Pellentesque eu justo quis lorem dictum imperdiet
          at sit amet felis. Donec ac tincidunt tellus. Praesent non odio a
          mauris porta pulvinar eu vel nunc. Nullam aliquam urna ante, a rutrum
          elit fermentum pretium. Curabitur rhoncus sapien quis sagittis
          consequat. Nulla in ligula rhoncus, feugiat purus eu, elementum leo.
        </p>

        <br />
        <br />
        <p>
          Sed ultricies mauris ligula, eu fermentum ex porta sed. Vivamus quis
          eros placerat, sollicitudin diam ut, commodo mi. Nulla sodales ante
          vitae mauris cursus, ac posuere lorem accumsan. Aenean euismod, elit
          quis euismod feugiat, sem quam hendrerit lorem, eget semper felis
          massa sed velit. Sed urna felis, ullamcorper eget viverra vel, aliquet
          a lectus. Praesent viverra magna et lobortis dictum. Ut at fermentum
          nunc. Donec hendrerit nulla eget justo vestibulum, quis vestibulum
          ante consequat. Aenean viverra pellentesque eros, semper cursus massa
          tempor eget. Phasellus cursus varius lacinia. Morbi tincidunt pharetra
          ex et suscipit. Duis sed pharetra magna. Nullam sit amet commodo elit,
          nec posuere quam.
        </p>

        <br />
        <br />
        <p>
          Aenean venenatis neque purus, nec hendrerit velit pretium vel. Aliquam
          quis orci dui. Proin ac ullamcorper tellus. Nullam scelerisque
          dignissim imperdiet. Curabitur metus metus, faucibus sed malesuada
          aliquam, sagittis non mi. Proin molestie vulputate elit non tempus.
          Curabitur rhoncus nec nibh a viverra. Nam sed sem ultricies, cursus
          quam et, lobortis risus. Suspendisse convallis risus quis velit
          feugiat, vitae ullamcorper felis condimentum. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Fusce ullamcorper pulvinar
          nisl, id ullamcorper risus rhoncus id.
        </p>

        <br />
        <br />
        <p>
          Praesent vehicula eleifend turpis at fermentum. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Duis tempor velit sit amet
          lorem sollicitudin, sit amet condimentum mi congue. Curabitur laoreet
          neque nisi, eget convallis mauris interdum a. Quisque pharetra vel
          ante ac ullamcorper. Suspendisse potenti. Nunc mollis laoreet
          pulvinar. Praesent tincidunt et felis nec suscipit. Phasellus lobortis
          bibendum nulla, et consequat nisl venenatis vel. Sed ultricies eget
          ante et imperdiet. Nullam tortor turpis, elementum ut condimentum id,
          hendrerit ut lectus. Pellentesque iaculis augue sit amet convallis
          auctor. Sed eu dui arcu.
        </p>

        <br />
        <br />
        <p>
          Phasellus eget lectus id sapien lacinia posuere eu id nisl. Nullam
          vulputate, velit at viverra gravida, eros turpis dignissim lectus, sed
          pretium dui purus quis mauris. Praesent ex est, accumsan non dapibus
          ac, suscipit nec dolor. Sed aliquet dolor sit amet turpis eleifend
          luctus. Etiam dignissim tortor ligula, quis blandit velit hendrerit
          sit amet. In hac habitasse platea dictumst. Donec euismod efficitur
          lacus, non volutpat eros tincidunt elementum. Nunc laoreet quam a
          ligula rutrum placerat. Quisque ac massa pretium, pellentesque sem sit
          amet, consequat eros. Vivamus mattis aliquam nibh, sed dignissim augue
          pharetra et.
        </p>

        <br />
        <br />
        <p>
          Ut suscipit enim non metus tristique, vitae ultricies tortor
          consectetur. Quisque nec posuere arcu. Pellentesque consectetur
          condimentum convallis. Nullam a quam vel lacus accumsan lobortis.
          Aenean non purus elit. Donec et varius libero, id lobortis lorem.
          Praesent fringilla condimentum libero, vitae ultricies enim molestie
          nec. Vivamus tempor ullamcorper efficitur. Proin commodo tincidunt
          dui, ut fringilla nunc porttitor in. Donec varius sed tellus a semper.
          Morbi ut felis arcu. Quisque nec bibendum mauris. Phasellus in neque
          orci. Fusce facilisis ac metus in cursus. Nulla facilisi. Integer
          consequat sapien non convallis facilisis.
        </p>

        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          suscipit vestibulum nisi, in consequat elit consequat nec. Sed vitae
          massa euismod sapien bibendum consequat vitae sit amet felis. Ut
          pulvinar ultrices urna eget vestibulum. Ut eget vehicula ex. Aliquam
          at diam tincidunt, vestibulum sem id, fringilla leo. Sed quis
          hendrerit arcu. Cras semper est et libero finibus, eget bibendum sem
          rutrum. Suspendisse potenti. Suspendisse quam nulla, vehicula quis
          porta at, hendrerit sed erat.
        </p>

        <br />
        <br />

        <p>
          Aliquam imperdiet leo at elit fermentum eleifend. Donec tincidunt
          porttitor neque, sed scelerisque velit tristique id. Suspendisse
          porttitor, dui sit amet lobortis luctus, odio nisi venenatis magna,
          vel luctus urna ligula et velit. Proin sed ullamcorper odio. In
          aliquet justo vitae arcu rhoncus, a tempus metus interdum. Fusce
          gravida euismod purus, sit amet aliquam metus suscipit a. Aenean
          dictum semper lectus, id finibus dui molestie vel. Nam blandit justo
          vel nulla ultricies, eu pellentesque velit laoreet. Vestibulum cursus
          urna in odio ultrices, vitae feugiat augue feugiat. Etiam dapibus
          nulla nec maximus efficitur. Etiam ultricies lectus a dolor porttitor,
          sed porta libero dapibus.
        </p>

        <br />
        <br />

        <p>
          Donec ac sagittis nisl. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Fusce egestas massa nec suscipit sagittis. Donec
          nisl mi, tincidunt quis faucibus at, iaculis sit amet nulla. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Nulla lacinia commodo quam, in tempus arcu
          sollicitudin eu. Aenean egestas dapibus justo, nec rhoncus felis. Ut
          interdum suscipit rhoncus. Donec laoreet sed purus viverra commodo.
          Integer vel lorem turpis. Nam sed eros euismod, vulputate diam et,
          finibus magna. Donec sit amet lectus eu dolor bibendum finibus. In
          lacus orci, porta sed ultricies quis, pharetra non mauris. Ut iaculis
          ex orci, eu gravida nisi ullamcorper efficitur.
        </p>

        <br />
        <br />

        <p>
          Pellentesque nunc mi, ultricies sed varius a, malesuada at dolor.
          Aenean facilisis odio ac lacus convallis tristique quis a lacus.
          Vivamus sodales iaculis arcu, vitae pretium magna volutpat faucibus.
          Aliquam rutrum eu nisi dapibus porttitor. Praesent sapien massa,
          porttitor ac lacinia eget, interdum interdum arcu. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Aenean in arcu nec mi maximus pellentesque nec eget erat. Cras non
          nunc ut ipsum ultrices aliquam. Etiam vitae arcu quis quam ultrices
          lobortis. Donec posuere dui eget congue suscipit. Aenean molestie
          rhoncus sodales. Maecenas vitae odio risus.
        </p>

        <br />
        <br />
        <p>
          Cras sit amet velit nibh. Cras laoreet nisl eu tristique sodales. Nam
          id porta lectus, vitae congue lacus. Aenean ante erat, ultricies in
          molestie volutpat, blandit in enim. Phasellus ultricies nibh libero,
          ac pretium lorem varius eget. Cras iaculis interdum justo eleifend
          vehicula. Morbi sed tortor euismod, pellentesque risus venenatis,
          gravida nunc. Pellentesque pretium lectus at pharetra consequat. Nam
          accumsan nibh sed felis tincidunt rutrum. In mollis lacus non nisi
          ultrices vestibulum eu quis lectus. Pellentesque fringilla urna
          tellus. Curabitur hendrerit euismod ipsum, sed mattis nulla laoreet
          ac. Aliquam erat volutpat. Cras et lacus lobortis felis aliquet
          vulputate. Praesent luctus, justo ut consectetur rutrum, turpis neque
          lobortis tellus, nec vestibulum libero massa nec velit. Cras dapibus
          at arcu eget finibus.
        </p>

        <br />
        <br />
        <p>
          Donec eget odio eget nisi pretium rutrum a eu dui. Pellentesque non
          ipsum nec nibh porttitor consectetur sit amet at tortor. Etiam ornare
          viverra dui, sit amet ullamcorper neque venenatis a. Etiam imperdiet
          elit et erat porta pretium. Sed malesuada diam lacus, non dictum odio
          vulputate vitae. Quisque sed justo in diam pharetra semper non vitae
          ipsum. Curabitur a dui augue. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Suspendisse
          ullamcorper, turpis placerat porta posuere, ipsum quam tempus dui,
          vitae ultricies ligula ligula eu sapien. Proin fringilla nisl nec
          hendrerit efficitur. Pellentesque eu justo quis lorem dictum imperdiet
          at sit amet felis. Donec ac tincidunt tellus. Praesent non odio a
          mauris porta pulvinar eu vel nunc. Nullam aliquam urna ante, a rutrum
          elit fermentum pretium. Curabitur rhoncus sapien quis sagittis
          consequat. Nulla in ligula rhoncus, feugiat purus eu, elementum leo.
        </p>

        <br />
        <br />
        <p>
          Sed ultricies mauris ligula, eu fermentum ex porta sed. Vivamus quis
          eros placerat, sollicitudin diam ut, commodo mi. Nulla sodales ante
          vitae mauris cursus, ac posuere lorem accumsan. Aenean euismod, elit
          quis euismod feugiat, sem quam hendrerit lorem, eget semper felis
          massa sed velit. Sed urna felis, ullamcorper eget viverra vel, aliquet
          a lectus. Praesent viverra magna et lobortis dictum. Ut at fermentum
          nunc. Donec hendrerit nulla eget justo vestibulum, quis vestibulum
          ante consequat. Aenean viverra pellentesque eros, semper cursus massa
          tempor eget. Phasellus cursus varius lacinia. Morbi tincidunt pharetra
          ex et suscipit. Duis sed pharetra magna. Nullam sit amet commodo elit,
          nec posuere quam.
        </p>

        <br />
        <br />
        <p>
          Aenean venenatis neque purus, nec hendrerit velit pretium vel. Aliquam
          quis orci dui. Proin ac ullamcorper tellus. Nullam scelerisque
          dignissim imperdiet. Curabitur metus metus, faucibus sed malesuada
          aliquam, sagittis non mi. Proin molestie vulputate elit non tempus.
          Curabitur rhoncus nec nibh a viverra. Nam sed sem ultricies, cursus
          quam et, lobortis risus. Suspendisse convallis risus quis velit
          feugiat, vitae ullamcorper felis condimentum. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Fusce ullamcorper pulvinar
          nisl, id ullamcorper risus rhoncus id.
        </p>

        <br />
        <br />
        <p>
          Praesent vehicula eleifend turpis at fermentum. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Duis tempor velit sit amet
          lorem sollicitudin, sit amet condimentum mi congue. Curabitur laoreet
          neque nisi, eget convallis mauris interdum a. Quisque pharetra vel
          ante ac ullamcorper. Suspendisse potenti. Nunc mollis laoreet
          pulvinar. Praesent tincidunt et felis nec suscipit. Phasellus lobortis
          bibendum nulla, et consequat nisl venenatis vel. Sed ultricies eget
          ante et imperdiet. Nullam tortor turpis, elementum ut condimentum id,
          hendrerit ut lectus. Pellentesque iaculis augue sit amet convallis
          auctor. Sed eu dui arcu.
        </p>

        <br />
        <br />
        <p>
          Phasellus eget lectus id sapien lacinia posuere eu id nisl. Nullam
          vulputate, velit at viverra gravida, eros turpis dignissim lectus, sed
          pretium dui purus quis mauris. Praesent ex est, accumsan non dapibus
          ac, suscipit nec dolor. Sed aliquet dolor sit amet turpis eleifend
          luctus. Etiam dignissim tortor ligula, quis blandit velit hendrerit
          sit amet. In hac habitasse platea dictumst. Donec euismod efficitur
          lacus, non volutpat eros tincidunt elementum. Nunc laoreet quam a
          ligula rutrum placerat. Quisque ac massa pretium, pellentesque sem sit
          amet, consequat eros. Vivamus mattis aliquam nibh, sed dignissim augue
          pharetra et.
        </p>

        <br />
        <br />
        <p>
          Ut suscipit enim non metus tristique, vitae ultricies tortor
          consectetur. Quisque nec posuere arcu. Pellentesque consectetur
          condimentum convallis. Nullam a quam vel lacus accumsan lobortis.
          Aenean non purus elit. Donec et varius libero, id lobortis lorem.
          Praesent fringilla condimentum libero, vitae ultricies enim molestie
          nec. Vivamus tempor ullamcorper efficitur. Proin commodo tincidunt
          dui, ut fringilla nunc porttitor in. Donec varius sed tellus a semper.
          Morbi ut felis arcu. Quisque nec bibendum mauris. Phasellus in neque
          orci. Fusce facilisis ac metus in cursus. Nulla facilisi. Integer
          consequat sapien non convallis facilisis.
        </p>

        <br />
        <br />
      </Main>
    </Layout>
  </>
);

export default Home;
