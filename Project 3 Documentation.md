# Covid-19 Cases in Chicago
Link to website: https://sites.google.com/uic.edu/team-a-t-project3/
## Dataset Description
The data we used for our project was found on the Chicago Data Portal. It ranges from from 03/01/2020 to 10/22/2022. The dataset contained 973 rows and 58 Attributes. However, after doing some data cleaning, we lowered the number to 965 rows. Some attributes include:
> Date: MM/DD/YYYY<br>
> Cases - Total: Integer, total cases recorded for the day <br>
> Deaths - Total: Integer, total deaths recorded for the day<br>
> Hospitalizations - Total: Integer, total hospitalizations recorded for the day<br>
> Cases - 0-17: Integer, total # of cases for those ages 0-17<br>
> Cases - Male: Integer, total # of cases for males<br>

Gender, Race, and Age attributes were also available for the three major ategories. The average cases for 2020 was 20,889.2. For 2021, the average was 20,786.7. Lastly, the average cases for 2022 was 24,695.7.

We used a second dataset as well for creating our spatial plot. The dataset contained Case, Test, and Death information by zip code from the start of the pandemic to the present. The original dataset contaned 2623 rows and 21 attributes. We took a small subset of the dataset, which included zip code data from the first week of October 2022. For our subset, we had a total of 57 rows and 21 attributes. Lastly, the attribute we focused on was Cases-Cumulative attribute, which stored the cumulative sum of covid cases since the start of the pandemic.

## Questions and Hypotheses
With our project, we aimed to answer the following questions:
1) What was the total number of Covid cases recorded in 2020, 2021, and 2022?
--> Hypothesis: 2021 will have the most recorded covid cases, while 2022 will have the least.

2) Which racial groups had the most recorded Covid Cases in 2020, 2021, and 2022?
--> Hypothesis: Those that identify as Latinx or Black will have the most recorded covid cases.

3) Which age range had the most hospitalizations in 2020, 2021, and 2022?
--> Hypothesis: Those older than 50 will have slightly more covid cases compared to other age range group.

4) How has the number of covid cases changed during 2022?
--> Hypothesis: There will be a sharp decrease in the recorded number of covid cases.

5) Do Males and Females have an equal number of Covid cases in 2020, 2021, and 2022?
--> Hypothesis: Covid cases will be nearly split evenly between Males and Females.

6) Does gender correlate with Covid Cases and Deaths?
--> Hypothesis: There will be no correlation between Gender, Cases, and Deaths.


## Data Transformations
For data transformations, we used pandas an created the following files:
> covid22Year - contains the monthly totals for all the categories in 2022<br>
> genderDistAllYear - contains monthly death and case totals for Males and Females. Ranges from 2020 - 2022<br>
> genderDist2 - contains monthly death and case totals for Males and Females. Only covers data from the second half of 2022<br>
> hospitalizationAges - contains the yearly hospitalizations for different age groups<br>
> raceInfo: contains the yearly hospitalizations for different age groups<br>
> yearTotal - contains yearly totals for all the categories in the dataset<br>
> zipData - contains Case, Test, and Death information for the different zip codes in Chicago. Only covers the first week of Oct.<br>

## What was the total number of Covid cases recorded in 2020, 2021, and 2022?
For this question, we used the yearTotal CSV. We chose to use a bar plot as it would allow us to compare the total # cases between the three different years. Regarding visual encoding, we used lines as the visual marking. In terms of channels, we used vertical and horizontal positions, and color. Lastly, for interactability, we added a highlight effect to the bars. A bar gets highlighted whenever the mouse moves over a bar.

![yearlyAvgBar.png](https://github.com/uic-vis/project-3-team-a-t/blob/aa707d022e46359bbc61f99e397a10ae7349ef69/yearlyAvgBar.png)

After plotting the data, we found our hypothesis to be partially true. 2021 did indeed have the most cases overall with a total of ~249.4k cases. However, 2020 had the least number of cases, with the total being under 210k, which was not what we had expected. Surprisingly, the total cases for 2022 was ~246.9k cases, which is really close to 2021's total. As we get closer to the end of the year, the total number of cases could end up surpassing last year's total.

## Which racial groups had the most recorded Covid Cases in 2020, 2021, and 2022?
For this question, we used the raceInfo CSV. Since we were comparing 3 different attributes, we chose to use a grouped bar plot. This allowed us to compare cases and racial categories in 2020, 2021, and 2022. Regarding visual encoding, we used lines as the visual marking. In terms of channels, we used vertical and horizontal positions, and color. Lastly, for interactability, we added a highlight effect to the bar groups. A group gets highlighted whenever the mouse moves over it.

![raceDistPlot.png](https://github.com/uic-vis/project-3-team-a-t/blob/f843d435087112984d0a3e8b9b5bac1c5e2386c1/raceDistPlot.png)

After plotting the data, we found our hypothesis to be partially true. The Latinx category did have the most cases, with a total of ~195.2k cases. This category reached also had a peak of 85,034 cases in 2020. However, the White category had the second highest total. This category had a total of ~181.3k cases, which was ~23.1k more cases that the Black category. The White category had a peak of ~57.6k cases in 2021. Something we found surprising was that the Asian category had the least cases during all three years. The total number of cases was ~31.5k, with a peak of ~16k in 2022.

## Which age range had the most hospitalizations in 2020, 2021, and 2022?
For this question, we used the hospitalizationAges CSV. Similar to the plot above, we used a grouped bar chart to Tplot the data. Regarding visual encoding, we used lines as the visual marking. In terms of channels, we used vertical and horizontal positions, and color. Lastly, for interactability, we added a highlight effect to the bar groups. A group gets highlighted whenever the mouse moves over it.

![hospAgeDist.png](https://github.com/uic-vis/project-3-team-a-t/blob/f843d435087112984d0a3e8b9b5bac1c5e2386c1/hospAgeDist.png)

After we plotted the data, we found our hypothesis to be true. The age range with the most cases was the 50-69 age range. This age range had a peak of ~7.9k hospitalizations in 2020. The age-range with the least hospitalizations was the 0-29 age range, with a peak of ~1.8k hospitalizations in 2021.

## How has the number of covid cases changed during 2022?
For this question, we referred to the covid22Year CSV. Regarding visual markings, we used lines. For channels, we used color and angle/tilt. After plotting our data, we found our hypothesis to be true. At the start of the year, there was around 91k cases. However, this number dropped down drastically in the next 2 months, with the total cases being under 10k cases. During April, the cases we up to about 34k cases. However, the total has been decreasing since. Although the current trend for Covid cases seeems to be decreasing, it important to note that number of cases could increase as we transition to winter.

![covid2022Line.png](https://github.com/uic-vis/project-3-team-a-t/blob/f843d435087112984d0a3e8b9b5bac1c5e2386c1/covid2022Line.png)

## Do Males and Females have an equal number of Covid cases in 2020, 2021, and 2022?
For this question, we referred to the genderDistAllYear CSV. Since we were comparing the number of cases between Males and Females, we chose a pie chart. Regarding visual markings, we used area. For channels, we used color and spatial region.

![genderPiePlots.png](https://github.com/uic-vis/project-3-team-a-t/blob/f843d435087112984d0a3e8b9b5bac1c5e2386c1/genderPiePlots.png)

After plotting the data, we found our hypothesis to be false. We expected the cases to be split almost evenly between Males and Females. Instead, Females had the majority cases during all three years.

## Does gender correlate with Covid Cases and Deaths?
For this question, we referred to the genderDist2 CSV. We wanted to see if there was a correlation between gender, cases, and death, which is why we chose a scatter plot. Regarding visual markings, we used points. For channels, we used color, vertical, and horizontal positioning. Lastly, for interactability, we added added a brush feature. This allows for certain points to be selected.

![scatter.png](https://github.com/uic-vis/project-3-team-a-t/blob/f843d435087112984d0a3e8b9b5bac1c5e2386c1/scatter.png)

After plotting the data, we found our hypothesis to be true. There was no correlation between the 3 attributes. One thing we did notice was that a majority of the points were clustered towards the bottom left portion of the plot. This clustering indicated that there were less deaths at the start of the second half of 2021.

## Covid Cases By Zipcode
For our last plot, we used the zipData GeoJson to create a spatial map. The map contains clickable points. When a point is pressed, a pop up appears, displaying the zip code and the cumulative sum of cases from the start of the pandemic to the first week of October 2022. After plotting the points on the map, we found that the zip codes in the downtown Loop area had the least covid cases recorded. The number of cases was under 10k cases overall. The zip codes with the most cases were spread out between the North side and the South Side of Chicago.

![zipSpatial.png](https://github.com/uic-vis/project-3-team-a-t/blob/f843d435087112984d0a3e8b9b5bac1c5e2386c1/zipSpatial.png)
