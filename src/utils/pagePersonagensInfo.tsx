interface InfoPerson{
    nome:string;
    descr1:string;
    descr2?:string;
    imgIcon:string;
    imgGrande1:string;
    imgGrande2:string;
}

 let nikoPerson:InfoPerson;
 let maeNikoPerson:InfoPerson;
 let silverPerson:InfoPerson;
 let maizePerson:InfoPerson;

 
nikoPerson = {
    nome:'Niko',
    descr1:'Silver é o engenheiro-chefe de Barrens e um dos personagens que Niko conhece em sua jornada.',
    descr2:'O engenheiro-chefe do Barren, um robô bastante taciturno que vive sozinho perto das minas. É seu dever supervisionar as operações e a manutenção do coração industrial do mundo, onde metais e recursos são retirados das garras da terra e transformados em bens úteis, ...pelo menos é assim que as coisas costumavam ser. Desde a evacuação, apenas alguns robôs ativos permanecem sob os cuidados de Silver, resistindo à energia de reserva e esperando o aparecimento do messias. ',
    imgIcon:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\imgs\paginaPersonagens\imagemIcon\imgNiko.svg',
    imgGrande1:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\nikoImg\imgGrande1.svg',
    imgGrande2:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\nikoImg\imagGrande2.svg'

}
maeNikoPerson = {
    nome:'Mãe',
    descr1:'A mãe de Niko é uma personagem secundária no jogo que parece ser a única mãe que cuida de Niko . Ela nunca é mostrada no jogo em si, mas frequentemente aparece nos sonhos de Niko. Seu nome nunca foi revelado no jogo original ou no remake, nem foi divulgado por nenhum dos desenvolvedores do jogo.',
    descr2:'Niko frequentemente menciona sua mãe de maneira positiva, muitas vezes referenciando suas panquecas e o quanto eles gostam delas. Durante a estada de Niko no Mundo , eles sentem falta da mãe, o que é um fator importante em seu desejo de voltar para casa.',
    imgIcon:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\imgs\paginaPersonagens\imagemIcon\imgMaeNiko.svg',
    imgGrande1:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\nikoImg\imgGrande1.svg',
    imgGrande2:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\nikoImg\imagGrande2.svg'
}

silverPerson ={
    nome:'Silver',
    descr1:'Silver é o engenheiro-chefe de Barrens e um dos personagens que Niko conhece em sua jornada.',
    descr2:'O engenheiro-chefe do Barren, um robô bastante taciturno que vive sozinho perto das minas. É seu dever supervisionar as operações e a manutenção do coração industrial do mundo, onde metais e recursos são retirados das garras da terra e transformados em bens úteis, ... pelo menos é assim que as coisas costumavam ser. Desde a evacuação, apenas alguns robôs ativos permanecem sob os cuidados de Silver, resistindo à energia de reserva e esperando o aparecimento do messias. ',
    imgIcon:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\imgs\paginaPersonagens\imagemIcon\imgSilver.svg',
    imgGrande1:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\nikoImg\imgGrande1.svg',
    imgGrande2:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\nikoImg\imagGrande2.svg'
}
 maizePerson = {
    nome:'Maize',
    descr1:'Eu não tenho mais medo',
    descr2:'O milho é um poderoso espírito vegetal encontrado nas ruínas do Vale . Ela é a guardiã do Vale, mas ficou enfraquecida devido à falta de luz solar. Ela tem pele verde com traços de planta, cabelo loiro preso em uma trança, com longa franja cobrindo o olho esquerdo e parte do olho direito. Seu cabelo tem algumas folhas e flores murchas formando um círculo ao redor de sua cabeça, muito parecido com uma coroa de flores. Ela também usa um vestido cor de jade que vai até os joelhos. Quando Niko a encontra pela primeira vez, ela está deitada no chão cercada por vinhas que parecem ser originárias dela.',
    imgIcon:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\imgs\paginaPersonagens\imagemIcon\imgMaize.svg',
    imgGrande1:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\nikoImg\imgGrande1.svg',
    imgGrande2:'C:\Users\Daiane\Desktop\OneshotSite\app\src\assets\nikoImg\imagGrande2.svg'
 }


 export const listPersonaInfo = [nikoPerson,maeNikoPerson,silverPerson,maizePerson];
 