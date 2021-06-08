import { useState, useEffect } from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

import useStyles from "./styles";

export default function StyledAccordion() {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Epidemiology</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Epidemiology
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Although the exact origin of the virus is still unknown, the first
            outbreak started in Wuhan, Hubei, China in late 2019. Many early
            cases of COVID-19 were linked to people who had visited the Huanan
            Seafood Wholesale Market in Wuhan, but it is possible that
            human-to-human transmission was already happening before this. On 11
            February 2020, the World Health Organization (WHO) named the disease
            "COVID-19", which is short for coronavirus disease 2019. The virus
            that caused the outbreak is known as severe acute respiratory
            syndrome coronavirus 2 (SARS-CoV-2), a newly discovered virus
            closely related to bat coronaviruses, pangolin coronaviruses, and
            SARS-CoV. The current scientific consensus is that the virus is most
            likely of zoonotic origin, from bats or another closely-related
            mammal. Despite this, the subject has generated a significant amount
            of speculation and conspiracy theories, which were amplified by
            rapidly growing online echo chambers. Global geopolitical divisions,
            notably between the United States and China, have been heightened
            because of this issue. The earliest known person with symptoms was
            later discovered to have fallen ill on 1 December 2019, and that
            person did not have visible connections with the later wet market
            cluster. However, an earlier case of infection could have occurred
            on 17 November. Of the early cluster of cases reported that month,
            two thirds were found to have a link with the market. There are
            several theories about when and where the very first case (the
            so-called patient zero) originated.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Disease</Typography>
          {/* <Typography className={classes.secondaryHeading}>Disease</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Symptoms of COVID-19 are variable, ranging from mild symptoms to
            severe illness. Common symptoms include headache, loss of smell and
            taste, nasal congestion and runny nose, cough, muscle pain, sore
            throat, fever, diarrhea, and breathing difficulties. People with the
            same infection may have different symptoms, and their symptoms may
            change over time. Three common clusters of symptoms have been
            identified: one respiratory symptom cluster with cough, sputum,
            shortness of breath, and fever; a musculoskeletal symptom cluster
            with muscle and joint pain, headache, and fatigue; a cluster of
            digestive symptoms with abdominal pain, vomiting, and diarrhea. In
            people without prior ear, nose, and throat disorders, loss of taste
            combined with loss of smell is associated with COVID-19.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Mitigation</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Mitigation
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Strategies in the control of an outbreak are screening, containment
            (or suppression), and mitigation. Screening is done with a device
            such as a thermometer to detect the elevated body temperature
            associated with fevers caused by the infection. Containment is
            undertaken in the early stages of the outbreak and aims to trace and
            isolate those infected as well as introduce other measures to stop
            the disease from spreading. When it is no longer possible to contain
            the disease, efforts then move to the mitigation stage: measures are
            taken to slow the spread and mitigate its effects on the healthcare
            system and society. A combination of both containment and mitigation
            measures may be undertaken at the same time. Suppression requires
            more extreme measures so as to reverse the pandemic by reducing the
            basic reproduction number to less than 1.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            National Responses
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Due to the pandemic in Europe, many countries in the Schengen Area
            have restricted free movement and set up border controls. National
            reactions have included containment measures such as quarantines and
            curfews (known as stay-at-home orders, shelter-in-place orders, or
            lockdowns). The WHO's recommendation on curfews and lockdowns is
            that they should be short-term measures to reorganise, regroup,
            rebalance resources, and protect health workers who are exhausted.
            To achieve a balance between restrictions and normal life, the
            long-term responses to the pandemic should consist of strict
            personal hygiene, effective contact tracing, and isolating when ill.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Impact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The outbreak is a major destabilising threat to the global economy.
            One estimate from an expert at Washington University in St. Louis
            gave a $300+ billion impact on the world's supply chain that could
            last up to two years. Global stock markets fell on 24 February due
            to a significant rise in the number of COVID-19 cases outside China.
            On 27 February, due to mounting worries about the COVID-19 outbreak,
            U.S. stock indexes posted their sharpest falls since 2008, with the
            Dow falling 1,191 points (the largest one-day drop since the
            financial crisis of 2007–08) and all three major indexes ending the
            week down more than 10 percent. On 28 February, Scope Ratings GmbH
            affirmed China's sovereign credit rating but maintained a Negative
            Outlook. Stocks plunged again due to coronavirus fears, the largest
            fall being on 16 March.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
