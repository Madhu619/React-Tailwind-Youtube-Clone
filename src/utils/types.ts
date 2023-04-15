export type ItemsList = {
  id: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: [string];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: {
      allowed: [string];
      blocked: [string];
    };
    projection: string;
    hasCustomThumbnail: boolean;
  };
  status: {
    uploadStatus: string;
    failureReason: string;
    rejectionReason: string;
    privacyStatus: string;
    publishAt: Date;
    license: string;
    embeddable: boolean;
    publicStatsViewable: boolean;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
  player: {
    embedHtml: string;
    embedHeight: number;
    embedWidth: number;
  };
  topicDetails: {
    topicIds: [string];
    relevantTopicIds: [string];
    topicCategories: [string];
  };
  recordingDetails: {
    recordingDate: Date;
  };
  fileDetails: {
    fileName: string;
    fileSize: number;
    fileType: string;
    container: string;
    videoStreams: [
      {
        widthPixels: number;
        heightPixels: number;
        frameRateFps: number;
        aspectRatio: number;
        codec: string;
        bitrateBps: number;
        rotation: string;
        vendor: string;
      }
    ];
    audioStreams: [
      {
        channelCount: number;
        codec: string;
        bitrateBps: number;
        vendor: string;
      }
    ];
    durationMs: number;
    bitrateBps: number;
    creationTime: string;
  };
  processingDetails: {
    processingStatus: string;
    processingProgress: {
      partsTotal: number;
      partsProcessed: number;
      timeLeftMs: number;
    };
    processingFailureReason: string;
    fileDetailsAvailability: string;
    processingIssuesAvailability: string;
    tagSuggestionsAvailability: string;
    editorSuggestionsAvailability: string;
    thumbnailsAvailability: string;
  };
  suggestions: {
    processingErrors: [string];
    processingWarnings: [string];
    processingHints: [string];
    tagSuggestions: [
      {
        tag: string;
        categoryRestricts: [string];
      }
    ];
    editorSuggestions: [string];
  };
  liveStreamingDetails: {
    actualStartTime: Date;
    actualEndTime: Date;
    scheduledStartTime: Date;
    scheduledEndTime: Date;
    concurrentViewers: number;
    activeLiveChatId: string;
  };
};

export type ChannelInfo = {
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: Date;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
    };
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    country: string;
  };
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      favorites: string;
      uploads: string;
    };
  };
  statistics: {
    viewCount: number;
    subscriberCount: number; // this value is rounded to three significant figures
    hiddenSubscriberCount: boolean;
    videoCount: number;
  };
  topicDetails: {
    topicIds: [string];
    topicCategories: [string];
  };
  status: {
    privacyStatus: string;
    isLinked: boolean;
    numberUploadsStatus: string;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean;
  };
  brandingSettings: {
    channel: {
      title: string;
      description: string;
      keywords: string;
      trackingAnalyticsAccountId: string;
      moderateComments: boolean;
      unsubscribedTrailer: string;
      defaultLanguage: string;
      country: string;
    };
    watch: {
      textColor: string;
      backgroundColor: string;
      featuredPlaylistId: string;
    };
  };
  auditDetails: {
    overallGoodStanding: boolean;
    communityGuidelinesGoodStanding: boolean;
    copyrightStrikesGoodStanding: boolean;
    contentIdClaimsGoodStanding: boolean;
  };
  contentOwnerDetails: {
    contentOwner: string;
    timeLinked: Date;
  };
  localizations: {
    default: {
      title: string;
      description: string;
    };
  };
};

export type VideoInfo = {
  id: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: [string];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: {
      allowed: [string];
      blocked: [string];
    };
  };
  status: {
    uploadStatus: string;
    failureReason: string;
    rejectionReason: string;
    privacyStatus: string;
    publishAt: Date;
    license: string;
    embeddable: boolean;
    publicStatsViewable: boolean;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
  player: {
    embedHtml: string;
    embedHeight: number;
    embedWidth: number;
  };
  topicDetails: {
    topicIds: [string];
    relevantTopicIds: [string];
    topicCategories: [string];
  };
  recordingDetails: {
    recordingDate: Date;
  };
  fileDetails: {
    fileName: string;
    fileSize: number;
    fileType: string;
    container: string;
    videoStreams: [
      {
        widthPixels: number;
        heightPixels: number;
        frameRateFps: number;
        aspectRatio: number;
        codec: string;
        bitrateBps: number;
        rotation: string;
        vendor: string;
      }
    ];
    audioStreams: [
      {
        channelCount: number;
        codec: string;
        bitrateBps: number;
        vendor: string;
      }
    ];
    durationMs: number;
    bitrateBps: number;
    creationTime: string;
  };
  processingDetails: {
    processingStatus: string;
    processingProgress: {
      partsTotal: number;
      partsProcessed: number;
      timeLeftMs: number;
    };
    processingFailureReason: string;
    fileDetailsAvailability: string;
    processingIssuesAvailability: string;
    tagSuggestionsAvailability: string;
    editorSuggestionsAvailability: string;
    thumbnailsAvailability: string;
  };
  suggestions: {
    processingErrors: [string];
    processingWarnings: [string];
    processingHints: [string];
    tagSuggestions: [
      {
        tag: string;
        categoryRestricts: [string];
      }
    ];
    editorSuggestions: [string];
  };
  liveStreamingDetails: {
    actualStartTime: Date;
    actualEndTime: Date;
    scheduledStartTime: Date;
    scheduledEndTime: Date;
    concurrentViewers: number;
    activeLiveChatId: string;
  };
  localizations: {
    default: {
      title: string;
      description: string;
    };
  };
};

export type CommentInfo = {
  id: string;
  snippet: {
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: {
      value: string;
    };
    channelId: string;
    videoId: string;
    textDisplay: string;
    textOriginal: string;
    parentId: string;
    canRate: boolean;
    viewerRating: string;
    likeCount: number;
    moderationStatus: string;
    publishedAt: Date;
    updatedAt: Date;
  };
};

export type CommentThreadInfo = {
  id: string;
  snippet: {
    channelId: string;
    videoId: string;
    topLevelComment: CommentInfo;
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
  replies: {
    comments: [CommentInfo];
  };
};

export type SuggestionList = {
  id: {
    kind: string;
    videoId: string;
    channelId: string;
    playlistId: string;
  };
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
  };
};

export type CategoriesList = {
  id: string;
  snippet: {
    channelId: string;
    title: string;
    assignable: boolean;
  };
};

export type SearchList = {
  id: {
    kind: string;
    videoId: string;
    channelId: string;
    playlistId: string;
  };
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
  };
};
