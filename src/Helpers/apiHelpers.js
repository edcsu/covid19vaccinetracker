export const baseApiUrl = 'https://disease.sh/v3/covid-19/'

export const appUrl = 'https://covid19globalstatviewer.web.app'

export const source = 'https://covid.ourworldindata.org'

export const vaccineDetails = {
  // global doses administered, sourced from Our World in Data
  coverage: 'vaccine/coverage?lastdays=30&fullData=true',
  // latest doses administered per country
  countryCoverage: 'vaccine/coverage/countries?lastdays=1&fullData=true'
}
