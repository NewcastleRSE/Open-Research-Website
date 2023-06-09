import axios from "axios";
import flattenObject from "./flattenObject";

async function fetchResearcherFunding(navigate, orcid) {
  try {
    const response = await axios.get(
      `https://pub.orcid.org/v3.0/${orcid}/record`
    );
    console.log("getting info");
    const userRecord = flattenObject(response.data);
    console.log("userrecord", userRecord);
    const funding = userRecord["activities-summary.fundings.group"];
    const formattedFunding = formatFundingData(funding);
    navigate("/");
    console.log("formattedFunding", formattedFunding);
    return formattedFunding;
  } catch (error) {
    console.error("Error getting user info:", error);
  }
}

/* returns an object fully formatted like so:
 
address: {
  city: 'Test City', 
  country: 'GB', 
  region: 'Newcastle'}
endDate: "01/03/2034"
organizationName: "Test Agency Name"
startDate: "01/02/2022"
title: "Test Title"
type: "grant"
url: "http://www.link.com"
*/
function formatFundingData(fundings) {
  return fundings.map((funding) => ({
    startDate: formatDate(funding, "start"),
    endDate: formatDate(funding, "end"),
    length: getProjectLength(funding),
    funder: formatOrganisation(funding),
    address: {
      city: formatAddress(funding, "city"),
      country: formatAddress(funding, "country"),
      region: formatAddress(funding, "region"),
    },
    title: formatTitle(funding),
    type: formatType(funding),
    url: formatUrl(funding),
  }));
}

// Helper functions for formatting the funding data. Each function ensures that the required property to be shown is available before trying to access it.

// Helper function to format both start and end date. The type variable will be either start or end.
function formatDate(funding, type) {
  return funding["funding-summary"][0][`${type}-date`].day
    ? `${funding["funding-summary"][0][`${type}-date`].day.value}`
    : "01"
        .concat(
          funding["funding-summary"][0][`${type}-date`].month
            ? `/${funding["funding-summary"][0][`${type}-date`].month.value}`
            : "01"
        )
        .concat(
          funding["funding-summary"][0][`${type}-date`].year
            ? `/${funding["funding-summary"][0][`${type}-date`].year.value}`
            : ""
        );
}

function getProjectLength(funding) {
  const years =
    funding["funding-summary"][0]["end-date"].year.value -
    funding["funding-summary"][0]["start-date"].year.value;
  const yearsInMonths = years * 12;
  const months =
    funding["funding-summary"][0]["end-date"].month.value -
    funding["funding-summary"][0]["start-date"].month.value;
  return months + yearsInMonths;
}

// Formatter for address. Type will be city, country or region.
function formatAddress(funding, type) {
  return (
    funding["funding-summary"][0].organization.address[type] &&
    funding["funding-summary"][0].organization.address[type]
  );
}

function formatOrganisation(funding) {
  return (
    funding["funding-summary"][0].organization.name &&
    funding["funding-summary"][0].organization.name
  );
}

// The value is in a value property but only if title.title is not null. It will either have a property of value or be null.
function formatTitle(funding) {
  return (
    funding["funding-summary"][0].title.title &&
    funding["funding-summary"][0].title.title.value
  );
}

function formatType(funding) {
  return (
    funding["funding-summary"][0].type && funding["funding-summary"][0].type
  );
}

// The value is in a value property but only if title.title is not null. It will either have a property of value or be null.
function formatUrl(funding) {
  return (
    funding["funding-summary"][0].url && funding["funding-summary"][0].url.value
  );
}

export default fetchResearcherFunding;
