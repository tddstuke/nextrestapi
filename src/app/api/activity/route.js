import db from "../../../../db/models/index";
import { NextResponse } from "next/server";
db.sequelize.sync();
const Activity = db.Activity;

export async function GET(req, res) {
  try {
    const data = await Activity.findAll({});
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    NextResponse.json(error);
  }
}
