import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { TabContext, TabPanel } from "@material-ui/lab";
import "./TabPostagem.css";
function TabPostagem() {
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar
          position="static"
          style={{
            background: "linear-gradient(45deg, #00214f 0%, #259887 100%)",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            centered
          >
            <Tab label="Sobre Nós" value="1" />
            <Tab label="Missão" value="2" />
            <Tab label="Visão" value="3" />
            <Tab label="Valores" value="4" />
          </Tabs>
        </AppBar>

        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">

            {/* Missão - tab1*/}
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              align="center"
              className="titulo"
            >
              Sobre Nós
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              align="justify"
              className="texto"
            >
              Quem somos: Somos uma rede social dedicada à promoção da ODS 2 - Fome Zero e Agricultura Sustentável. Nosso objetivo é fornecer um espaço onde agricultores, especialistas e todas as pessoas interessadas em alimentação saudável, sustentável e acessível possam se conectar e compartilhar conhecimentos, experiências e informações relevantes para a nossa comunidade. Acreditamos que a colaboração e a troca de informações são fundamentais para alcançar a nossa missão e visão.
            </Typography>
          </Box>
        </TabPanel>

        {/* Sobre nós - tab2*/}
        <TabPanel value="2">
          <Typography variant="h5" align="center" className="titulo">
            Missão
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="justify"
            className="texto"
          >
            Missão: Nossa missão é promover a ODS 2 - Fome Zero e Agricultura Sustentável por meio de uma rede social que conecte agricultores, especialistas, organizações e todas as pessoas interessadas em alimentação saudável, sustentável e acessível. Nosso objetivo é fornecer um espaço onde a troca de informações, conhecimentos e experiências possa contribuir para a promoção da agricultura sustentável e para o fim da fome em todo o mundo.
          </Typography>
        </TabPanel>

        {/* Sobre nós - tab2*/}
        <TabPanel value="3">
          <Typography
            variant="h5"
            gutterBottom
            component="h5"
            align="center"
            className="titulo"
          >
            Visão
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="justify"
            className="texto"
          >
            Visão: Nossa visão é um mundo onde todas as pessoas tenham acesso a alimentos nutritivos e saudáveis, cultivados e produzidos de maneira sustentável, e onde a fome e a insegurança alimentar sejam coisas do passado. Acreditamos que essa visão pode ser alcançada por meio da promoção da agricultura sustentável e do compartilhamento de conhecimentos e experiências entre agricultores, especialistas, organizações e pessoas de todo o mundo.
          </Typography>
        </TabPanel>

        {/* Valores - tab4*/}
        <TabPanel value="4">
          <Typography
            variant="h5"
            gutterBottom
            component="h5"
            align="center"
            className="titulo"
          >
            Valores
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="justify"
            className="texto"
          >
            Nossa rede social possui espaços para o compartilhamento de conhecimentos e experiências entre agricultores, especialistas e interessados no tema através de postagens. Os usuários podem compartilhar suas experiências na agricultura, técnicas de cultivo sustentável, receitas saudáveis, histórias inspiradoras, notícias relevantes e outras informações importantes para a nossa comunidade. Acreditamos que essas postagens são fundamentais para difundir o conhecimento e inspirar outras pessoas a se engajarem na luta contra a fome e pela promoção da agricultura sustentável.
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
