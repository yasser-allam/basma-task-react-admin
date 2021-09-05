import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { baseURL } from "../settings/config";
import axios from "axios";

const Stats = () => {
  const [average24Hours, setAverage24Hours] = useState(0);
  const [averageWeek, setAverageWeek] = useState(0);
  const [averageMonth, setAverageMonth] = useState(0);
  const [average3Month, setAverage3Month] = useState(0);
  const [averageYear, setAverageYear] = useState(0);
  const [computedValues, setComputedValues] = useState(0);
  
  useEffect(async () => {
    const { data } = await axios.get(`${baseURL}stats`, {
      params: { interval: 1 },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    setAverage24Hours(data.length);
    setComputedValues((prev) => prev + 1);
  }, []);

  useEffect(async () => {
    const { data } = await axios.get(`${baseURL}stats`, {
      params: { interval: 7 },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    setAverageWeek(data.length);
    setComputedValues((prev) => prev + 1);
  }, []);

  useEffect(async () => {
    const { data } = await axios.get(`${baseURL}stats`, {
      params: { interval: 30 },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    setAverageMonth(data.length);
    setComputedValues((prev) => prev + 1);
  }, []);

  useEffect(async () => {
    const { data } = await axios.get(`${baseURL}stats`, {
      params: { interval: 90 },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    setAverage3Month(data.length);
    setComputedValues((prev) => prev + 1);
  }, []);

  useEffect(async () => {
    const { data } = await axios.get(`${baseURL}stats`, {
      params: { interval: 365 },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    setAverageYear(data.length);
    setComputedValues((prev) => prev + 1);
  }, []);

  return (
    <>
      {computedValues !== 5 ? (
        <center>
          <h1>Calculating data...</h1>
        </center>
      ) : (
        <Card>
          <CardContent>
            <center>
              <h1>Stats</h1>
            </center>
            <h3> Average 24 Hours: {average24Hours}</h3>
            <h3> Average Week: {averageWeek}</h3>
            <h3> Average Month: {averageMonth}</h3>
            <h3> Average 3 Months: {average3Month}</h3>
            <h3> Average Year: {averageYear}</h3>
          </CardContent>
        </Card>
      )}
    </>
  );
};
export default Stats;
