export default function generateFeedback(formData) {
  // init feedback
  let feedback = ''

  // if article
  if (formData.Article) {
    formData.Article.map(async (article) => {
      if (article.articleEmbargo) {
        feedback += `You used an embargo with ${article.articleTitle} next time...\n\n`
      }
    })
  }

  if (formData.Code) {
    formData.Code.map((code) => {
      if (!code.openSource) {
        feedback += `Make ${code.codeTitle} open source to improve openness, this can be achieved by using GitHub.\n\n`
      }
      if (!code.codeRelease) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      if (!code.codeConf) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      return feedback
    })
  }

  if (formData.Dataset) {
    formData.Dataset.map((data) => {
      if (!data.dataMetadata) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      if (!data.dataFair) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      if (!data.dataRelease) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      if (!data.dataConf) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      return feedback
    })
  }

  if (formData.DigitalScholarship) {
    formData.DigitalScholarship.map((ds) => {
      if (ds.dsEmbargo) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      return feedback
    })
  }

  if (formData.Material) {
    formData.Material.map((material) => {
      if (!material.materialReproduction) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      if (!material.materialRelease) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      return feedback
    })
  }

  if (formData.Monograph) {
    formData.Monograph.map((mono) => {
      if (mono.monographEmbargo) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      return feedback
    })
  }
  // check
  if (formData.PeerRev) {
    formData.PeerRev.map((pr) => {
      if (pr.peerRevResponse) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      return feedback
    })
  }

  if (formData.Preprint) {
    formData.Preprint.map((preprint) => {
      if (!preprint.preprintRelease) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      return feedback
    })
  }

  if (formData.Protocol) {
    formData.Protocol.map((protocol) => {
      if (!protocol.protocolSharing) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      return feedback
    })
  }

  if (formData.RegReport) {
    formData.RegReport.map((regreport) => {
      if (!regreport.regReportFunding) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      if (!regreport.regReportPeerRev) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      if (!regreport.regReportChanges) {
        feedback += 'FEEDBACK GOES HERE\n\n'
      }
      return feedback
    })
  }

  return feedback
}
