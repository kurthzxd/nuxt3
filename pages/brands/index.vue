<template>
    <n-space justify="center">
    <n-h3> Sessions</n-h3>
  </n-space>
  <div>

   <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="false"
    />
  </div>
</template>

<script setup>
import { ref, h } from "vue";
const pagination = ref(false);
import { NDataTable, NButton, NSpace, NH3 } from "naive-ui";
// const message = useMessage()

const router = useRouter();

const message = ref("");
const createColumns = ({ play }) => {
  return [
    {
      title: "Speaker Name",
      key: "speaker",
    },
    {
      title: "Start",
      key: "start",
    },
    {
      title: "End",
      key: "end",
    },
    {
      title: "Actions",
      key: "actions",
      render(row) {
        return h(
          NButton,
          {
            type:"primary",
            ghost: true,
            primary: true,
            round:true,
            size: "small",
            onClick: () => play(row),
          },
          { default: () => "Edit Sessions" }
        );
      },
    },
  ];
};

const timeStampToDate = (timeStamp) => {
  var dateFormat = new Date(timeStamp);

  return (
    dateFormat.getDate() +
    "/" +
    (dateFormat.getMonth() + 1) +
    "/" +
    dateFormat.getFullYear() +
    " " +
    dateFormat.getHours() +
    ":" +
    dateFormat.getMinutes() +
    ":" +
    dateFormat.getSeconds()
  );
};

const convertTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds = totalSeconds - hours * 3600;
  const finalTime =
    str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
  return finalTime;
};

const str_pad_left = (string, pad, length) => {
  return (new Array(length + 1).join(pad) + string).slice(-length);
};

const columns = ref(
  createColumns({
    play(row) {
      console.log("row", row);
      router.push({ path: `/brands/${row.stream}`, query: row });
      // message.value(`Play ${row.title}`);
    },
  })
);
const data = ref([
  {
    adDuration: convertTime(120),
    adStream: "4202985a73b1688e894b455a31e750ac",
    description:
      "How to Position Your Business to Be an Automatic Yes to Your Ideal Clients",
    download:
      "https://thesuccessfulbookkeeper.com/hubfs/images/summit/summit-2022-presentation-downloads/BizChix%20-%20The%20Automatic%20Yes%20Framework%20with%20Natalie%20Eckdahl%20Workbook.pdf",
    downloadDescription:
      "BizChix_The Automatic Yes Framework with Natalie Eckdahl_Workbook.pdf",
    duration: convertTime(2876),
    end: timeStampToDate(22103833),
    intro:
      "https://imagedelivery.net/zUHvQVaonKX8fuaOjIvxsg/d156d8e4-3f7d-4d43-964d-997fda808000/public",
    speaker: "Natalie Eckdahl",
    speakerCompany: "Biz Chix, Inc.",
    speakerTitle: "CEO and Lead Coach",
    sponsor: "Ignition",
    start: timeStampToDate(22094837),
    stream: "82bfd51cc1a7cd03f124b258ffe10348",
    title:
      "The Automatic Yes Framework - Positioning Your Business to Be an Automatic Yes to Your Ideal Clients",
    track: "Sales",
    type: "Session",
  },
]);
</script>

<style scoped></style>
