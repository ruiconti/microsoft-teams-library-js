import { promises as fsPromises } from "fs";

import { decompressStatsFile, getAllFilesInDirectory } from "../utilities";
import { BundleBuddyConfig, WebpackStatsJson } from "../BundleBuddyTypes";
import { BundleFileData, getBundleFilePathsFromFolder } from "./getBundleFilePathsFromFolder";

/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Returns a list of all the files relevant to bundle buddy from the given folder
 * @param bundleReportPath - The path to the folder containing the bundle report
 */
export async function getBundlePathsFromFileSystem(
  bundleReportPath: string
): Promise<BundleFileData[]> {
  const filePaths = await getAllFilesInDirectory(bundleReportPath);

  return getBundleFilePathsFromFolder(filePaths);
}

/**
 * Gets and parses a BundleBuddyConfig  file from the filesystem
 * @param path - the full path to the file in the filesystem
 */
export async function getBundleBuddyConfigFromFileSystem(
  path: string
): Promise<BundleBuddyConfig> {
  const file = await fsPromises.readFile(path);

  return JSON.parse(file.toString());
}

/**
 * Gets a decompressed webpack stats file from the filesystem
 * @param path - the full path to the file in the filesystem
 */
export async function getStatsFileFromFileSystem(
  path: string
): Promise<WebpackStatsJson> {
  const file = await fsPromises.readFile(path);

  return decompressStatsFile(file);
}