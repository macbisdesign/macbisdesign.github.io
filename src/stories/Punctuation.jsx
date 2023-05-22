import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PunctuationTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{borderRadius: '4px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', padding: '3rem', border: '1px solid hsla(203, 50%, 30%, 0.15)'}}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
          <Tab label="Bullet Points" {...a11yProps(0)} />
          <Tab label="Colons" {...a11yProps(1)} />
          <Tab label="Commas" {...a11yProps(2)} />
          <Tab label="Contractions" {...a11yProps(3)} />
          <Tab label="Dashes" {...a11yProps(4)} />
          <Tab label="Exclamation marks" {...a11yProps(5)} />
          <Tab label="Hyphens" {...a11yProps(6)} />
          <Tab label="Periods" {...a11yProps(7)} />
          <Tab label="Quotation marks" {...a11yProps(8)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <h2>Bullet Points</h2>
          <h3>General Guidance</h3>
          <p>
          <ul>
              <li>Capitalize first word</li>
              <li>Keep them brief</li>
              <li>Stick with standard bullets and avoid nesting </li>
              <li>Only add a period at the end if the bullet is a complete sentence.</li>
              <li>Be consistent within a list. Either make each bullet a complete sentence, or make them all not sentences. This list is not a good example of that guidance.</li>
          </ul>

            Use sentence case (only capitalize the first word and proper nouns and acronyms) in titles, headings, menu items, labels, and buttons.
          </p>
            <h3>Accessibility Notes</h3>
            <p>Breaking up larger blocks of text makes it easier to scan and read. Screen readers recognize bullets, but won’t always distinguish between levels of indentation, so avoid nesting bullets within a list.</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h2>Colons</h2>
          <p>
          Colons can be used to introduce a bulleted list or numbered steps.
          </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h2>Commas</h2>
          <h3>General Guidance</h3>
          <p>
          Use a serial (or “Oxford”) comma to separate items in a list. Don’t use commas in place of connecting words like “and,” “or,” “because,” and so on.
          </p>
          <h3>Examples</h3>
          <p>[To be added]</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h2>Contractions</h2>
          <h3>General Guidance</h3>
          <p>
          Use common contractions; they convey a more conversational tone. 
          Common contractions include:
          <ul>
            <li>Can’t, won’t, wouldn’t</li>
            <li>It’s, that’s, who’s</li>
            <li>They’re, we’re</li>
          </ul>
          </p>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <h2>Dashes</h2>
          <h3>General Guidance</h3>
          <p>
          There are three similar-looking dash types, but they have distinct applications.
          </p>
      <h3>Em dash</h3>
      <p>Em dashes are similar to parentheses or commas: use one at the beginning and end of a clause when commas would make the 
        sentence confusing. They should be used sparingly. If there’s a way to simplify or break apart a sentence to make it easier to 
        understand, that’s always better than adding more punctuation.
      </p>
      
      <h3>En Dash</h3>
      <p>En dashes are used to indicate a range of things. Leave a space between the en dash and words or numbers on either side of it.</p>
      
      <h3>Hyphens</h3>
      <p>The shortest dash, a hyphen connects words that modify a noun. It can also be used in long strings of numbers or letters to create visual breaks. No spaces between the words and the hyphen.</p>
      
      <h3>Accessibility notes</h3>
      <p>Screen readers do not reliably read dashes the same way. If there is a clear way to do it, it is preferable to write content without dashes. For example, instead of Monday - Friday, write Monday to Friday.</p>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <h2>Exclamation marks</h2>
          <p>
          Depending on the situation, exclamation marks can cause users anxiety. If we use them, it should be in the context of a decisively positive action, such as completing a complicated series of tasks.
          </p>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <h2>Hyphens</h2>
          <p>See <a>dashes.</a></p>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <h2>Periods</h2>
          <h3>General Guidance</h3>
          <p>Avoid periods in headers, titles, buttons, field descriptions, and menu names.</p> 

          <p>Only use periods in a bulleted list when each item in the list is a complete sentence.</p>
      </TabPanel>
      <TabPanel value={value} index={8}>
      <h2>Quotation marks</h2>
          <h3>General Guidance</h3>
          <p>
          Use quotation marks for direct quotes. Don’t use them to denote UI labels.
    
          </p>
      </TabPanel>
    </Box>
    </div>
  );
}