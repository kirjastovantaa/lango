import styled from 'styled-components';
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from 'react-tabs';

const Tabs = styled(UnstyledTabs)`
  border: 1px solid #e0e0e0;
  background: white;
`;

const TabList = styled(UnstyledTabList)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: 'selected',
  disabledClassName: 'disabled',
})`
  flex-grow: 1;
  text-align: center;
  padding: 12px 0;
  list-style: none;
  cursor: pointer;
  color: #888;
  border-left: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;

  &:first-child {
    border-left: none;
  }

  &.selected {
    color: #0097ff;
    border-bottom: none;
  }

  &.disabled {
    color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: 'selected' })`
  display: none;
  padding: 10px 20px;
  &.selected {
    display: block;
  }
`;

Tab.tabsRole = 'Tab';
Tabs.tabsRole = 'Tabs';
TabPanel.tabsRole = 'TabPanel';
TabList.tabsRole = 'TabList';

export { Tab, TabList, Tabs, TabPanel };
