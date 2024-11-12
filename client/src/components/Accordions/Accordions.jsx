import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const accordionData = [
  {
    panel: 'panel1',
    title: 'Agneau',
    secondaryText: '',
    image: '/images/Categories/agneau.jpg',
    Products: [
      "Agneau 10KG / 14KG",
      "Agneau 14KG /20KG",
      "Carré d'agneau",
      "Gigot d'agneau",
      "Gigot d'agneau mariné",
      "Gigot d'agneau de lait",
      "Fressure d'agneau",
      "Crépine d'agneau",
      "Tripes d'agneau",
      "Tête d'agneau brûlée",
      "Pattes d'agneau brûlées",
      "Souris d'agneau",
      "Chevreau",
      "Brebis",
      "Chèvre"
  ]
  },
  {
    panel: 'panel2',
    title: 'Boeuf',
    secondaryText: '',
    image: '/images/Categories/boeuf.jpg',
    Products:[
      "JB entier",
      "JB petit",
      "Avant JB",
      "Plat de côte JB",
      "Cuisses de vache",
      "Cuisse désossée sous vide de vache",
      "AVANTS DESOSSE SOUS VIDE JB",
      "Viande hachée pur bœuf",
      "Pistolet bœuf",
      "Aloyau de bœuf",
      "Genisse",
      "Queue de bœuf",
      "Pied de bœuf",
      "Foie de bœuf",
      "Pand de bœuf",
      "Cœur de bœuf",
      "Rognons de bœuf",
      "Joue de bœuf"
  ]
  },
  {
    panel: 'panel3',
    title: 'Veau',
    secondaryText: '',
    image: '/images/Categories/veau.jpg',
    Products: [
      "DEMI VEAU S/ROGN R AVS",
      "DEMI VEAU S/ROGN O AVS",
      "DEMI VEAU S/ROGN P AVS",
      "PAN SPL PISTOL AVS",
      "CUISSEAU SPL AVS",
      "BASSE SPL AVS",
      "EPBC SPL AVS",
      "DEMI VEAU HALAL R",
      "DEMI VEAU S/ROGN HALAL R",
      "DEMI VEAU HALAL O",
      "DEMI VEAU S/ROGN HALAL O",
      "DEMI VEAU HALAL P",
      "DEMI VEAU S/ROGN HALAL P",
      "PAN SPL HALAL",
      "CUISSEAU SPL HALAL",
      "CARRE SPL HALAL",
      "BASSE DBL HALAL",
      "EPBC DBL HALAL",
      "POITRINE SPL HALAL",
      "ABATS DE VEAU",
      "FOIE DE VEAU AVS",
      "COEUR VEAU AVS",
      "PIED VEAU (PIECE) AVS",
      "CREPINE DE VEAU AVS",
      "LANGUE VEAU C.SUISSE AVS",
      "CERVELLE VEAU (PIECE) AVS",
      "TETE VEAU ECH GR (PIECE) AVS",
      "ROGN VX DS GRAISSE X 1 AVS",
      "RIS DE VEAU AVS",
      "RATE VEAU (POIDS) AVS",
      "QUEUE VEAU (PDS) AVS"
  ]
  },
  {
    panel: 'panel4',
    title: 'Volailles',
    secondaryText: '',
    image: '/images/Categories/poulet.jpg',
    Products:  [
      "Filet de Poulet",
      "Pilons de Poulet",
      "Ailes de Poulet",
      "Cuisses de Poulet",
      "Poulet PAC",
      "Foie",
      "Gésier"
  ]
  },
  {
    panel: 'panel5',
    title: 'Surgelé',
    secondaryText: '',
    image: '/images/Categories/surgele.png',
    Products: [
      "Boîte SH 100% Pur Bœuf",
      "Burger de Bœuf Nature",
      "Burger de Bœuf aux Oignons",
      "Le Maxi Tendre",
      "Steaks Hachés 100% Pur Bœuf (32 pièces de 45g)",
      "Steaks Hachés 100% Pur Bœuf (25 pièces de 80g)",
      "Boulettes au Bœuf 100% Pur Bœuf",
      "Boulettes au Bœuf Façon Kefta",
      "Viande Hachée 100% Pur Bœuf",
      "Escalope Viennoise",
      "Cordon Bleu de Poulet",
      "Nuggets Filet de Poulet",
      "Burger de Poulet",
      "Crousty de Poulet",
      "Spicy de Poulet",
      "Cordon Bleu Filet de Poulet",
      "Escalope Viennoise Filet de Poulet",
      "Burger Filet de Poulet",
      "Nuggets Filet de Poulet",
      "Lamelles de Kebab de Poulet",
      "Wings",
      "Fish Fillet (Green Table)",
      "Fish Burger",
      "Crevettes Roses",
      "Crevettes Grises",
      "Cocktail de Fruits de Mer",
      "Beignets de Calamar",
      "Frites de Poisson",
      "Bâtonnets de Poisson",
      "Fish Fantasy",
      "Torredo Shrimps",
      "Dorade Rose",
      "Dorade Grise",
      "Chinchard",
      "Sardines Vidées",
      "Rouget Barbet",
      "Filet de Panga",
      "Meloui",
      "Msemen",
      "Baghrir",
      "Pain Kebab",
      "Tortillas Q30",
      "Tortillas Q20",
      "Petits Pois",
      "Haricots Verts",
      "Fèves",
      "Poivrons Tricolores",
      "Oignons",
      "Samosas",
      "Yakitori Poulet Satay",
      "Yakitori Bœuf Fromage",
      "Yakitori Boulettes de Poulet",
      "Chicken Crousty",
      "Wings BBQ",
      "Wings Tex Mex",
      "Nuggets",
      "Chicken Tenders"
  ]
  },
  {
    panel: 'panel6',
    title: 'Epicerie',
    secondaryText: '',
    image: '/images/Categories/epicerie.jpg',
    Products:[
        "Sauce Mum's 300ml Bbq",
        "Sauce Mum's 300ml Samouraï",
        "Sauce Mum's 300ml Mayonnaise",
        "Sauce Mum's 300ml Ketchup",
        "Sauce Mum's 300ml BigUp",
        "Sauce Mum's 300ml Algérienne",
        "Sauce Mum's 500ml Blanche",
        "Sauce Mum's 500ml Andalous",
        "Sauce Mum's 500ml Ketchup",
        "Sauce Mum's 500ml Sweat Thaï",
        "Sauce Mum's 500ml Bbq",
        "Sauce Mum's 500ml Mayonnaise Tradi",
        "Sauce Mum's 500ml Algérienne",
        "Sauce Mum's 500ml BigUp",
        "Sauce Mum's 500ml Samouraï",
        "Sauce Mum's 900ml Sweat Thaï",
        "Sauce Mum's 900ml Mayo",
        "Sauce Mum's 900ml Ketchup",
        "Sauce Mum's 900ml Bbq",
        "Sauce Mum's 900ml BigUp",
        "Sauce Mum's 900ml Poivre",
        "Sauce Mum's 900ml Algérienne",
        "Sauce Mum's 900ml Samouraï",
        "Sauce Mum's 900ml Andalous"
    ]
  },
];

export default function Accordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <box sx={{ mx: '10%' }}>
        {accordionData.map(({ panel, title, secondaryText, image, Products }) => (
        <Accordion key={panel} expanded={expanded === panel} onChange={handleChange(panel)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${panel}bh-content`}
            id={`${panel}bh-header`}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>{title}</Typography>
            {secondaryText && (
              <Typography sx={{ color: 'text.secondary' }}>{secondaryText}</Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Box display="flex" width="100%">
              {/* Image Section (30%) */}
              <Box sx={{ width: '30%', mr: 2 }}>
                <img
                  src={image}
                  alt={title}
                  style={{ width: '60%', height: 'auto', borderRadius: '8px' }}
                />
              </Box>
              {/* Text Section (70%) */}
              <Box sx={{ width: '70%' }}>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {Products.map((product, index) => (
                    <Button key={index} variant="outlined" color="inherit" sx={{ color: 'black' }}>
                      {product}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
      </box>
      
    </div>
  );
}
